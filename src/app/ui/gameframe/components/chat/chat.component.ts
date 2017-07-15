import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

// services
import { ChatService } from './chat.service';
import { InventoryService } from 'app/ui/gameframe/components/inventory/inventory.service';

// models
import { NgForm } from "@angular/forms";

@Component({
  selector: 'rpg-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private messages: any[] = [];

  @ViewChild('displayBox') private displayBox: ElementRef;

  constructor(
    private chatService: ChatService,
    private inventoryService: InventoryService
  ) { }

  // local methods
  private getMessages(): void {
    this.chatService.messages$
      .subscribe(messages => {
        this.messages = messages;
      });
  }
  
  private onFormSubmit(form: NgForm) {
    let value = form.value;
    form.resetForm();
    if(value.command.charAt(0) == "/") {
      if(value.command.charAt(1) == "@") {
        this.inventoryService.addItem(parseInt(value.command.substr(2,6)));
        return;
      }
      this.inventoryService.removeItem(parseInt(value.command.substr(1,2)))
      this.sendGameMessage("This is a command. " + value.command.substr(1,2));
      return;
    }
    this.sendPublicMessage("Jake", value.command);
  }

  private sendMessage(): void {
    this.sendPublicMessage("Jake", "testing");
  }

  private scrollToBottom(): void {
    try {
      this.displayBox.nativeElement.scrollTop = this.displayBox.nativeElement.scrollHeight;
    } catch(err) { }                 
  }
  
  // ChatService interfaces
  /**
   * ChatService interface for sending game messages
   * @param message text content of game message
   */
  private sendGameMessage(message: string): void {
    this.chatService.sendGameMessage(message);
  }

  /**
   * ChatService interface for sending public messages
   * @param author author of the public message
   * @param message text content of the public message
   */
  private sendPublicMessage(author: string, message: string): void {
    this.chatService.sendPublicMessage(author, message);
  }

  /**
   * ChatService interface for helper method to
   * validate message type
   * @param message chat message Class: PublicMessage, GameMessage, etc
   */
  private isPublicMessage(message): boolean {
    return this.chatService.isPublicMessage(message);
  }

  // ng lifecycle hooks
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 
  
  ngOnInit() { 
    this.scrollToBottom();
    this.getMessages();
  }
}

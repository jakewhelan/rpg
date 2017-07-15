// reactive extensions
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';

// services
import { ChatService } from 'app/ui/gameframe/components/chat/chat.service';
import { ItemService } from 'app/shared/services/item/item.service';

@Injectable()
export class InventoryService {

  public selectedItem$: BehaviorSubject<number> = new BehaviorSubject(null);
  public items$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private items: any[] = new Array(28).fill(null);

  constructor(
    private chatService: ChatService,
    private itemService: ItemService
  ) {
    this.items$.next(this.items);
  }

  addItem(id: number, quantity?: number): void {
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i] == null) {
        this.itemService.getItem(id)
          .subscribe(result => {
            if(result.error) {
              return;
            }
            if(quantity) {
              result.data.quantity = quantity;
            }
            console.log(result.data);
            this.items[i] = result.data;
          });
        return;
      }
    }
    this.chatService.sendGameMessage("Your inventory is too full to hold anything more.")
  }

  removeItem(index: number): void {
    if(index > (this.items.length -1)) 
      return;
      
    this.items[index] = null;
    this.items$.next(this.items);
  }

  selectItem(index: number): void {
    // if no item previously selected
    if(this.selectedItem$.value == null) {
      // select item
      this.selectedItem$.next(index);
      return;
    } 
    // if selected item same as previously selected
    if(this.selectedItem$.value == index) {
      // deselect
      this.selectedItem$.next(null);
      return
    }
    // use previously selected item on selected item, deselect previously selected
    //this.chatService.sendGameMessage("Used " + this.items[this.selectedItem$.value].title + " on " + this.items[index].title + ".");
    this.chatService.sendGameMessage("Nothing interesting happened.");
    this.selectedItem$.next(null);
  }

}

// reactive extensions
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';

// models
import { GameMessage } from './models/game-message.model';
import { PublicMessage } from './models/public-message.model';

@Injectable()
export class ChatService {

  public messages$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private messages: GameMessage[] = [];

  constructor() {
    this.sendGameMessage("Welcome to RuneScape.");
    this.messages$.next(this.messages);
  }

  sendGameMessage(message: string): void {
    this.messages.push(new GameMessage(message));
    this.messages$.next(this.messages);
  }

  sendPublicMessage(author: string, message: string): void {
    this.messages.push(new PublicMessage(author, message));
    this.messages$.next(this.messages);
  }

  isPublicMessage(message): boolean {
    return message instanceof PublicMessage;
  }

  sendPrivateMessage(): void {
    console.error("ChatService: (sendPrivateMessage) this feature is not supported.")
  }

}

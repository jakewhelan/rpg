import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { UIRoutingModule } from './ui.routes';

// shared module
import { SharedModule } from 'app/shared/shared.module';

// game module
import { GameModule } from 'app/game/game.module';

// components
import { UIComponent } from './ui.component';
import { GameframeComponent } from './gameframe/gameframe.component';
import { ChatComponent } from './gameframe/components/chat/chat.component';
import { InventoryComponent } from './gameframe/components/inventory/inventory.component';

// services
import { ChatService } from './gameframe/components/chat/chat.service';
import { InventoryService } from './gameframe/components/inventory/inventory.service';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    GameModule,
    SharedModule
  ],
  declarations: [
    UIComponent,
    GameframeComponent, 
    ChatComponent, 
    InventoryComponent
  ],
  providers: [
    ChatService,
    InventoryService
  ]
})
export class UIModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { GameService } from './game.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    GameService
  ]
})
export class GameModule { }

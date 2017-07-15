import { Component, OnInit } from '@angular/core';

// services
import { GameService } from 'app/game/game.service';

@Component({
  selector: 'rpg-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UIComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.gameService.init();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpg-gameframe',
  templateUrl: './gameframe.component.html',
  styleUrls: ['./gameframe.component.scss']
})
export class GameframeComponent implements OnInit {

  private activeTab: string = "inventory";

  constructor() { }
  
  ngOnInit() {
  }

}

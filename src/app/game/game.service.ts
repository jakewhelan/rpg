import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  private initialised: boolean = false;

  constructor() { }

  public init(): void {
    if(!this.initialised) {
      this.initialised = true;
      this.update();
      console.info("GameService: (start) rpg game initalised");
    } else {
      console.error("GameService: (start) rpg game already initalised");
    }
  }

  private update(): void {
    console.log("update");

    // update again in .6s
    setTimeout(() => {
      this.update()
    }, 600);
  }

}

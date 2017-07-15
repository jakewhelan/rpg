import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing module
import { AppRoutingModule } from './app.routes';

// shared module
import { SharedModule } from './shared/shared.module';

import { UIModule } from './ui/ui.module';
import { GameModule } from './game/game.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UIModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

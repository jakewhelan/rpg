import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { UIComponent } from './ui.component';
import { GameframeComponent } from './gameframe/gameframe.component';

const routes: Routes = [
  { 
    path: '', component: UIComponent,
    children: [
      {
        path: '', 
        component: GameframeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UIRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
import { ItemService } from './services/item/item.service';
import { UtilityService } from './services/utility/utility.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    FormsModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    ItemService,
    UtilityService
  ]
})
export class SharedModule { }

import { Component, OnInit } from '@angular/core';

// services
import { InventoryService } from './inventory.service';

@Component({
  selector: 'rpg-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  private selectedItem: number = null;
  private items: any[] = [];

  constructor(
    private inventoryService: InventoryService
  ) { }

  getItems(): void {
    this.inventoryService.items$
      .subscribe(items => {
        this.items = items;
      });
  }

  getSelectedItem(): void {
    this.inventoryService.selectedItem$
      .subscribe(selectedItem => {
        this.selectedItem = selectedItem;
      });
  }

  selectItem(index: number): void {
    this.inventoryService.selectItem(index);
  }

  ngOnInit() {
    this.getItems();
    this.getSelectedItem();
  }

}

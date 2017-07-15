// reactive extensions
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/first';
// import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
 
// imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// services
import { UtilityService } from '../utility/utility.service';

// models
import { Item } from '../../models/item';

@Injectable()
export class ItemService {

  constructor(
    private http: Http,
    private utilityService: UtilityService
  ) { }

  getItem(id: number): Observable<any> {
    // if item is available in cache
    if(localStorage.getItem("rpg.cache.item." + id)) {
      // get item from cache
      console.info("ItemService: (getItem) retrieving item from cache")
      const cache = JSON.parse(localStorage.getItem("rpg.cache.item." + id));
      const item = new Item(
        cache.id,
        cache.name,
        cache.description,
        cache.icon
      );
      return Observable.of(this.utilityService.toSuccess(item));
    }

    // otherwise, get item from server
    console.info("ItemService: (getItem) retrieving item from server");
    const endpoint = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=" + id;
    return this.http
      .get(endpoint)
      .flatMap(response => {
        const json = response.json();
        const item = new Item(
          id, 
          json.item.name, 
          json.item.description, 
          json.item.icon
        );
        localStorage.setItem("rpg.cache.item." + id, JSON.stringify(item));
        return Observable.of(this.utilityService.toSuccess(item));
      })
      .catch(error => {
        console.error("ItemService: (getItem) error retrieving item");
        return Observable.of(this.utilityService.toError(error.status, error.statusText));
      });
  }

}

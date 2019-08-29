import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  purchaseList = [];

  private clearSource = new BehaviorSubject(false);
  clearAllItemsEvent = this.clearSource.asObservable();

  private deleteSource = new BehaviorSubject('');
  deleteItemEvent = this.deleteSource.asObservable();

  constructor() { }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book) {
    this.purchaseList.push(book);
    return of(book);
  }

  deleteItem(id: string) {
    for (let i = 0; i < this.purchaseList.length; i++) {
      if (this.purchaseList[i].id === id) {
        this.purchaseList.splice(i, 1);
        break;
      }
    }

    this.deleteSource.next(id);

    return of(this.purchaseList);
  }

  clearBasket() {
    this.purchaseList.splice(0, this.purchaseList.length);
    this.clearSource.next(true);
  }
}

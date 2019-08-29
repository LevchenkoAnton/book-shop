import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from '../../services/basket.service';
import { Book } from '../../models/Book';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  basketItems = [];
  faTimes = faTimes;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
    this.basketService.getBasketItem().subscribe(items => {
      this.basketItems = items;
    });
  }

  clearBasket() {
    this.basketService.clearBasket();
  }

  deleteBasketItem(id: string) {
    this.basketService.deleteItem(id)
  }

}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { BasketService } from '../../services/basket.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  books: Book[];

  constructor(
    private bookService: BookService,
    private basketService: BasketService,
    private message: FlashMessagesService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => this.books = books);

    this.basketService.clearAllItemsEvent.subscribe(status => {
      if (status) {
        this.books.map(book => {
          book.isAddBasket = false;
          return book;
        });
      }
    });

    this.basketService.deleteItemEvent.subscribe((id: string) => {
      if (id) {
        this.books.forEach(book => {
          if (book.id === id) {
            book.isAddBasket = false;
          }
        });
      }
    });
  }

  addBook(book: Book) {
    const newBasketItem = {
      id: book.id,
      price: book.price,
      name: book.name,
    };

    this.basketService.addItem(newBasketItem).subscribe(book => {
      this.message.show(`Book: "${book.name}" added to card success`, {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeByBtn: true,
        timeout: 3000
      });
    });
  }

  deleteBookFromBasket(id: string) {
    this.basketService.deleteItem(id).subscribe(data => {
      this.message.show(`Book: deleted from the card success`, {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeByBtn: true,
        timeout: 3000
      });
    })
  }

}

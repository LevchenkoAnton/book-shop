import { Component, OnInit } from '@angular/core';
import { Book } from "../../models/Book";
import { BookService } from "../../services/book.service";
import { Currency } from '../../models/Currency';
import { CurrencyService } from '../../services/currency.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  books: Book[];
  currentCurrency: Currency;

  constructor(
    public bookService: BookService,
    public currencyService: CurrencyService,
    private message: FlashMessagesService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });

    this.currencyService.selectedCurrency.subscribe(data => {
      this.currentCurrency = Object.create(data.find(obj => obj.isActive));
    });
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book)
      .then(() => {
        this.message.show(`Book: "${book.name}" deleted success`, {
          cssClass: 'alert-warning',
          showCloseBtn: true,
          closeByBtn: true,
          timeout: 3000
        });
      });
  }
}

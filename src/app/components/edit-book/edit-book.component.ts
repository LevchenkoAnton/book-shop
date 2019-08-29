import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Book } from "../../models/Book";
import { BookService } from "../../services/book.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: string;
  book: Book = {
    price: 0,
    name: '',
    author: '',
    description: '',
    links: [],
    date: '',
  };

  constructor(
    public bookService: BookService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public message: FlashMessagesService
  ) { }

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params.id;
    this.bookService.getBookById(this.bookId).subscribe((data: any) => {
      this.book = data.data();
      this.book.id = this.bookId;
    });
  }

  editBook() {
    this.bookService.editBook(this.book)
      .then(() => {
        this.router.navigate(['/panel']);
        this.message.show(`Book: "${this.book.name}" updated success`, {
          cssClass: 'alert-success',
          showCloseBtn: true,
          closeByBtn: true,
          timeout: 3000
        });
      })
      .catch(err => {
        this.message.show(err.message, {
          cssClass: 'alert-danger',
          showCloseBtn: true,
          closeByBtn: true,
          timeout: 3000
        });
      });

  }

}

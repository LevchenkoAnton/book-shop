import { Component, OnInit } from '@angular/core';
import { Book } from "../../models/Book";
import { Router } from "@angular/router";
import { BookService } from "../../services/book.service";
import { IdService } from "../../services/id.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {
    name: '',
    author: '',
    description: '',
    id: this.id.generate(),
    links: [
      {
        type: 'type',
        link: 'link',
      },
    ]
  };

  constructor(
    public bookService: BookService,
    public router: Router,
    public id: IdService,
    public message: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe((book: Book) => {
      this.router.navigate(['/panel']);
      this.message.show(`Book: "${book.name}" added success`, {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeByBtn: true,
        timeout: 3000
      });
    });
  }

}

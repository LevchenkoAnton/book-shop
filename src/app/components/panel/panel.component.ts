import { Component, OnInit } from '@angular/core';
import { Book } from "../../models/Book";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  books: Book[];

  constructor(
    public bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

}

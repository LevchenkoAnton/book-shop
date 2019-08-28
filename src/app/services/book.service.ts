import { Injectable } from '@angular/core';
import { Book } from "../models/Book";
import { IdService } from "./id.service";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {
      name: 'Выразительный JavaScript',
      description: 'lorem lorem',
      author: 'Anonimus',
      id: '71e9a7dc-fde8-4384-842f-65a17aed5e0e',
      links: [
        {
          type: 'pdf',
          link: 'link1',
        },
        {
          type: 'otf',
          link: 'link2',
        },
      ]
    },
  ];

  constructor() { }

  getBooks() {
    return of(this.books);
  }

  getBookById(id: string) {
    const book = this.books.find(book => book.id === id);
    return of(book);
  }

  addBook(book: Book) {
    this.books.unshift(book);
    return of(book);
  }

  deleteBook(id: string) {

  }

  editBook(book: Book) {
    this.books = this.books.map((item: Book) => {
      if (item.id === book.id) {
        item = book;
      }

      return item;
    });

    return of(book);
  }
}

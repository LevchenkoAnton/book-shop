import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookCollection: AngularFirestoreCollection;
  bookDoc: AngularFirestoreDocument;
  books: Observable<Book[]>;
  book: Observable<Book>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.bookCollection = this.afs.collection('books');
  }

  getBooks() {
    this.books = this.bookCollection.snapshotChanges().pipe(
      map(collection => {
        return collection.map(document => {
          const data = document.payload.doc.data() as Book;
          data.id = document.payload.doc.id;

          return data;
        });
      })
    );
    return this.books;
  }

  getBookById(id: string) {
    // const book = this.books.find(book => book.id === id);
    // return of(book);
  }

  addBook(book: Book) {
    this.bookCollection.add(book);
    return of(book);
  }

  deleteBook(id: string) {

  }

  editBook(book: Book) {
    // this.books = this.books.map((item: Book) => {
    //   if (item.id === book.id) {
    //     item = book;
    //   }
    //
    //   return item;
    // });
    //
    // return of(book);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
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
    this.bookDoc = this.afs.doc(`books/${id}`);
    return this.bookDoc.get();
  }

  addBook(book: Book) {
    this.bookCollection.add(book);
    return of(book);
  }

  deleteBook(book: Book) {
    return this.bookCollection.doc(book.id).delete();
  }

  editBook(book: Book) {
    this.bookDoc = this.afs.doc(`books/${book.id}`);
    return this.bookDoc.update(book);
  }
}

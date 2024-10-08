import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { AppSettings } from '../app.custom.settings';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(AppSettings.API_END_POINTS.BOOKS);
  }

  public getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(AppSettings.API_END_POINTS.AUTHORS);
  }

  getBooksWithAuthors(): Observable<Book[]> {
    const books$ = this.getBooks();
    const authors$ = this.getAuthors();

    const booksWithAuthors$ = forkJoin([books$, authors$]).pipe(
      map(([books, authors]) => 
          books.map(book => ({
              ...book,
              author: authors.find(author => author.id === book.authorId)
          }))
      )
    );

    //Avec combineLatest()
    // this.booksWithAuthors$ = combineLatest([books$, authors$]).pipe(
    //   map(([books, authors]) => 
    //       books.map(book => ({
    //           ...book,
    //           author: authors.find(author => author.authorId === book.authorId)
    //       }))
    //   )
    // );

    return booksWithAuthors$;
  }
}
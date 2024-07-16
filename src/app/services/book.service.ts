import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Book } from '../models/book';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly BOOK_API_URL = 'api/books';
  private readonly AUTHOR_API_URL = 'api/authors';

  constructor(private httpClient: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.BOOK_API_URL);
  }

  public getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(this.AUTHOR_API_URL);
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
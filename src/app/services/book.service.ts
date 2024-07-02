import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly BOOK_API_URL = 'api/books';

  constructor(private httpClient: HttpClient) {}

  public getBooks(): Observable<Book[]> {

    return this.httpClient.get<Book[]>(this.BOOK_API_URL);
  }
}
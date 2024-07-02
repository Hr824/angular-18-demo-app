import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private readonly AUTHOR_API_URL = 'api/authors';

  constructor(private httpClient: HttpClient) {}

  public getAuthors(): Observable<Author[]> {

    return this.httpClient.get<Author[]>(this.AUTHOR_API_URL);
  }
}

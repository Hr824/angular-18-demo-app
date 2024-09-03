import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { apiEndpoints } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(apiEndpoints.ARTICLES);
  }
}
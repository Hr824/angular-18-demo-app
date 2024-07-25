import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly ARTICLE_API_URL = 'api/articles';

  constructor(private httpClient: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.ARTICLE_API_URL);
  }
}
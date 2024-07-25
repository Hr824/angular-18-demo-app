import { Component, model } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Article } from '../../../models/article';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [LoaderComponent, CurrencyPipe],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component {
  articles = model.required<Article[]>();
  selectedArticles = model.required<Article[]>();
  total = model.required<number>();

  addArticle(article: Article): void {
    article.quantity += 1;
    this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    this.total.update((total) => total + article.price);
  }

  removeArticle(article: Article): void {
    article.quantity -= 1;
    this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    this.total.update((total) => total - article.price);
  }


  clearQuantity(): void {
 
    this.articles().forEach((article) => {
        article.quantity = 0;
    });

    this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    this.total.set(0);
  }
}
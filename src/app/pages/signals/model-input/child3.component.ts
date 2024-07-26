import { Component, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../../models/article';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [LoaderComponent, CommonModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component {
  articles = model.required<Article[]>();
  selectedArticles = model.required<Article[]>();
  quantities = signal(0);

  addArticle(article: Article): void {
    if(article.quantity < 5){
      article.quantity += 1;
      article.totalPrice = article.quantity * article.unitPrice;
      
      this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
      this.quantities.update(q => q + 1);
    }
  }

  removeArticle(article: Article): void {
    if(article.quantity > 0){
      article.quantity -= 1;
      article.totalPrice = article.quantity * article.unitPrice;

      this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
      this.quantities.update(q => q - 1);
    }
  }

  clearQuantity(article: Article): void {
    if(article.quantity > 0){
      this.quantities.update(q => q - article.quantity);

      article.quantity = 0;
      article.totalPrice = 0;
      this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    }
  }


  clearQuantities(): void {
    this.articles().forEach((article) => {
        article.quantity = 0;
        article.totalPrice = 0;
    });

    this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    this.quantities.set(0);
  }
}
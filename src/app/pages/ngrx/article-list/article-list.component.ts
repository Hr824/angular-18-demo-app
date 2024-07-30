import { Component, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Article } from '../../../models/article';
import { ArticleService } from '../../../services/article.service';
import { CartService } from '../../../store/cart/cart.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AsyncPipe, LoaderComponent, BreadcrumbComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  theme = signal<string>('NgRx');
  page = signal<string>('Shopping cart');

  articles = signal<Article[]>([]);

  subscriptions: Subscription = new Subscription();

  articleService = inject(ArticleService);
  cartService = inject(CartService);

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.subscriptions .unsubscribe();
  }


  getArticles(): void {
    const articles$ = this.articleService.getArticles();

    this.subscriptions.add(articles$.subscribe({
      next: data => { this.articles.set(data) }
    }));  
  }

  
  addToCart(article: Article, quantity: number) {
    
    let articleClone: Article = JSON.parse(JSON.stringify(article));
    articleClone.quantity = quantity;
    this.cartService.addArticle(articleClone, 10);
  }


  convertStringToNumber(value: string){
    return Number(value);
  }
}
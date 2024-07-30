import { Component, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, of, Subscription } from 'rxjs';
import { Article } from '../../../models/article';
import { ArticleService } from '../../../services/article.service';
import { CartService } from '../../../store/cart/cart.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';

import { FormsModule } from '@angular/forms';

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
  //selectedArticles = signal<Article[]>([]);
  //total = signal(0);
  subscriptions: Subscription = new Subscription();

  articleService = inject(ArticleService);
  cartService = inject(CartService);


  cartArticles$: Observable<Article[]> = of([]);

  ngOnInit(): void {
    this.getArticles();

    this.cartArticles$ = this.cartService.getCartArticles();
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

  // articles = model.required<Article[]>();
  // selectedArticles = model.required<Article[]>();
  //quantities = signal(0);

  
  addToCart(article: Article, quantity: string) {

    let articleClone: Article = JSON.parse(JSON.stringify(article));
    articleClone.quantity = Number(quantity);


    //article.quantity = Number(quantity);

    //console.log('Article2', article);

    this.cartService.addArticle(articleClone, 5);

    //this.cartArticles$ = this.cartService.getCartArticles();
  }


  // removeToCart(article: Article) {

  //   this.cartService.removeArticle(article.id, 0);

  //   this.cartArticles$ = this.cartService.getCartArticles();
  // }

  //addArticle(article: Article): void {
    // if(article.quantity < 5){
    //   article.quantity += 1;
    //   article.totalPrice = article.quantity * article.unitPrice;
      
    //   this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    //   this.quantities.update(q => q + 1);
    // }
  //}

  removeArticle(article: Article): void {
    // if(article.quantity > 0){
    //   article.quantity -= 1;
    //   article.totalPrice = article.quantity * article.unitPrice;

    //   this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    //   this.quantities.update(q => q - 1);
    // }
  }

  clearQuantity(article: Article): void {
    // if(article.quantity > 0){
    //   this.quantities.update(q => q - article.quantity);

    //   article.quantity = 0;
    //   article.totalPrice = 0;
    //   this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    // }
  }


  clearQuantities(): void {
    // this.articles().forEach((article) => {
    //     article.quantity = 0;
    //     article.totalPrice = 0;
    // });

    // this.selectedArticles.set(this.articles().filter(a => a.quantity > 0));
    // this.quantities.set(0);
  }
}

import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { CartService } from '../../../store/cart/cart.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, AsyncPipe, RouterLink, LoaderComponent, BreadcrumbComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  theme = signal<string>('NgRx');
  page = signal<string>('Shopping cart');

  cartArticles$: Observable<Article[]> = of([]);
  cartTotalPrice$: Observable<number> = of(0); 
  cartNbArticles$: Observable<number> = of(0);

  cartService = inject(CartService);

  ngOnInit(): void {
    this.cartArticles$ = this.cartService.getCartArticles();
    this.cartTotalPrice$ = this.cartService.getCartTotalPrice();
    this.cartNbArticles$ = this.cartService.getCartNbArticles();  
  }

  onQuantityChange(event: Event, article: Article) {
    let elmt = event.target as HTMLSelectElement
    this.cartService.updateQuantity(article.id, Number(elmt.value));
  }

  removeToCart(article: Article) {
    this.cartService.removeArticle(article.id);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
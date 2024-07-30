import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { Observable, of } from 'rxjs';
import { CartService } from '../../../store/cart/cart.service';
import { Article } from '../../../models/article';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, AsyncPipe, LoaderComponent, BreadcrumbComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {

  theme = signal<string>('NgRx');
  page = signal<string>('Shopping cart');

  cartArticles$: Observable<Article[]> = of([]);

  cartService = inject(CartService);


  ngOnInit(): void {
    this.cartArticles$ = this.cartService.getCartArticles();
  }

  ngOnDestroy(): void {
    //this.subscriptions .unsubscribe();
  }


  //Update quantity
  onChange(event: Event, article: Article) {
    let elmt = event.target as HTMLSelectElement;

    this.cartService.updateQuantity(article.id, Number(elmt.value));

    // this.selectedOption.set(elmt.value);
    // this.selectedCity.set(elmt.selectedOptions[0].innerText);
  }


  // updateQuantity(articleId: number, quantity: number) {
  //   this.cartService.updateQuantity(articleId, quantity );
  // }


  removeToCart(article: Article) {

    this.cartService.removeArticle(article.id);

    //this.cartArticles$ = this.cartService.getCartArticles();
  }
}

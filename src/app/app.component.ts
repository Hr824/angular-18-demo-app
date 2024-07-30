import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Article } from './models/article';
import { CartService } from './store/cart/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgbDropdownModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //Pour les dropdown du menu
  collapsed = true;

  //articles$: Observable<Article[]>;
  //total$: Observable<number>;
  nbArticles$: Observable<number>;

  constructor(private cartService: CartService) {
    //this.articles$ = this.cartService.getCartArticles();
    //this.total$ = this.cartService.getCartTotal();
    this.nbArticles$ = this.cartService.getCartNbArticles();  
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
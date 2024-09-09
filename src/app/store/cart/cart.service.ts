import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from './cart.model';
import { Article } from '../../models/article';
import { addArticle, clearCart, removeArticle, updateArticleQuantity } from './cart.actions';
import { Observable } from 'rxjs';
import { selectCartArticles, selectCartNbArticles, selectCartTotalPrice } from './cart.selectors';

//============================
//Service pour gérer le panier
//============================

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private store: Store<{ cart: Cart }>) { }

  addArticle(article: Article, maxQuantity: number): void {
    this.store.dispatch(addArticle({ article, maxQuantity }));
  }

  removeArticle(articleId: number) {
    this.store.dispatch(removeArticle({ articleId }));
  }

  updateQuantity(articleId: number, quantity: number) {
    this.store.dispatch(updateArticleQuantity({ articleId, quantity }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }

  
  //###################################################################

  getCartArticles(): Observable<Article[]>{
    //Sans Selector
    //return this.store.select(state => state.cart.articles);

    //Avec Selector
    return this.store.select(selectCartArticles);
  }


  getCartNbArticles(): Observable<number>{
    //Sans Selector
    // return this.store.select(state => 
    //   state.cart.articles.reduce((total, article) => total + article.quantity, 0)
    // );

    //Avec Selector
    return this.store.select(selectCartNbArticles);
  }

  getCartTotalPrice(): Observable<number>{
    //Sans Selector
    // return this.store.select(state => 
    //   state.cart.articles.reduce((total, article) => total + article.unitPrice * article.quantity, 0)
    // );

    //Avec Selector
    return this.store.select(selectCartTotalPrice);
  }
}
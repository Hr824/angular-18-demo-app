import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Cart } from "./cart.model";
import { map } from "rxjs";
import { addArticle, clearCart, removeArticle, updateArticleQuantity } from "./cart.actions";

@Injectable()
export class CartEffects {

  constructor(private actions$: Actions, private store: Store<{ cart: Cart }>) {}

  saveCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addArticle, removeArticle, updateArticleQuantity, clearCart),
        map((action) => {
          this.store.select(state => state.cart).subscribe({
              next: response => {
              localStorage.setItem('shoppingCart', JSON.stringify(response));
              }
          });   
        })
      ),
    { dispatch: false }
  );

  //============================================================
  //Version qui supprime le localstorage quand on vide le panier
  //============================================================
  // saveCart$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(addProduct, removeProduct, updateProductQuantity, clearCart),
  //       tap((action) => {

  //         if(action.type === '[Cart] Clear Cart'){
  //           localStorage.removeItem("cartState");
  //         }
  //         else{
  //           this.store.select(state => state.cart).subscribe({
  //              next: response => {
  //               localStorage.setItem('cartState', JSON.stringify(response));
  //              }
  //           });
  //         }    
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
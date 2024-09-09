import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Cart } from "./cart.model";

export const selectCart = createFeatureSelector<Cart>('cart');


export const selectCartArticles = createSelector(
    selectCart,
    (state: Cart) => state.articles
);


export const selectCartNbArticles = createSelector(
    selectCart,
    (state: Cart) => state.articles.reduce((total, article) => total + article.quantity, 0)
);


export const selectCartTotalPrice = createSelector(
    selectCart,
    (state: Cart) => state.articles.reduce((total, article) => total + article.unitPrice * article.quantity, 0)
);
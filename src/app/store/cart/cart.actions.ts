import { createAction, props } from "@ngrx/store";
import { Article } from "../../models/article";

//==================================
//Définition des actions
//==================================

export const addArticle = createAction(
    '[Cart] Add article',
    props<{ article: Article, maxArticle: number }>()
);

export const removeArticle = createAction(
    '[Cart] Remove article',
    props<{ articleId: number }>()
);

export const updateArticleQuantity = createAction(
    '[Cart] Update Article Quantity',
    props<{ articleId: number, quantity: number }>()
);

export const clearCart = createAction(
    '[Cart] Clear Cart'
);
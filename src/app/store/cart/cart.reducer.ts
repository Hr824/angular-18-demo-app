import { createReducer, on } from "@ngrx/store";
import { Cart } from "./cart.model";
import { addArticle, clearCart, removeArticle, updateArticleQuantity } from "./cart.actions";
import { Article } from "../../models/article";

//==================================
//Définition de l'état
//==================================

const storedCart = localStorage.getItem('shoppingCart');
export const initialState: Cart = storedCart ? JSON.parse(storedCart) : { articles: [] };

export const cartReducer = createReducer(
    initialState,
    on(addArticle, (state, { article, maxArticle }) => {
        const existingArticle = state.articles.find(a => a.id === article.id);
        if (existingArticle) {
          return {
            ...state,
            articles: state.articles.map(a => {
                if(a.quantity < maxArticle){
                  const newQuantity = a.quantity + article.quantity;
                  //const newQuantity = a.quantity + 1;
                  return a.id === article.id ? { ...a, quantity: newQuantity, totalPrice: newQuantity * a.unitPrice } : a
                }
                else{
                  return a;
                }         
            })
          };
        }
        else{
          //On clone 'article' pour éviter l'erreur "quantity" is read-only
          let articleClone: Article = JSON.parse(JSON.stringify(article));
          //articleClone.quantity = 1;
          articleClone.totalPrice = articleClone.quantity * articleClone.unitPrice;

          return {
            ...state,
            articles: [...state.articles, articleClone]
          };
        }
    }),
    // on(removeArticle, (state, { articleId, minArticle }) => ({
    //   ...state,
    //   articles: state.articles.map(a => {
    //     if(a.quantity > minArticle){
    //       const newQuantity = a.quantity - 1;
    //       return a.id === articleId ? { ...a, quantity: newQuantity, totalPrice: newQuantity * a.unitPrice } : a
    //     }
    //     else{
    //       return a;
    //     }         
    // })
    // })),
    on(removeArticle, (state, { articleId }) => ({
      ...state,
      articles: state.articles.filter(article => article.id !== articleId)
    })),
    on(updateArticleQuantity, (state, { articleId, quantity }) => ({
      ...state,
      articles: state.articles.map(article => {
        return article.id === articleId ? { ...article, quantity, totalPrice: quantity * article.unitPrice } : article
      })
    })),
    on(clearCart, state => ({
      ...state,
      articles: []
    }))
  );
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';

export const ngrxRoutes: Routes = [
    {
        path: 'articles',
        loadComponent: () => import('./article-list/article-list.component').then(m => m.ArticleListComponent)
        //component: ArticleListComponent
    },
    {
      path: 'cart',
      loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
      //component: CartComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
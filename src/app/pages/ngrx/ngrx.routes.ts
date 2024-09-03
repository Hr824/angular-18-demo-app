import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';
import { AppSettings } from '../../app.custom.settings';

export const ngrxRoutes: Routes = [
    {
        path: 'articles',
        title: `${AppSettings.APP_TITLE} - NgRx : Articles`,
        loadComponent: () => import('./article-list/article-list.component').then(item => item.ArticleListComponent)
    },
    {
        path: 'cart',
        title: `${AppSettings.APP_TITLE} - NgRx : Panier`,
        loadComponent: () => import('./cart/cart.component').then(item => item.CartComponent)
    },
    {
        path: '**',
        title: `${AppSettings.APP_TITLE} - Erreur 404`,
        component: PageNotFoundComponent
    }
];
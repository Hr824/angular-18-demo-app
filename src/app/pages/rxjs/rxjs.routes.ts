import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';
import { AppSettings } from '../../app.custom.settings';

export const rxjsRoutes: Routes = [
    {
        path: 'forkjoin',
        title: `${AppSettings.APP_TITLE} - RxJS : forkjoin`,
        loadComponent: () => import('./forkjoin/forkjoin.component').then(item => item.ForkjoinComponent)
    },
    {
      path: '**',
      title: `${AppSettings.APP_TITLE} - Erreur 404`,
      component: PageNotFoundComponent
    }
];
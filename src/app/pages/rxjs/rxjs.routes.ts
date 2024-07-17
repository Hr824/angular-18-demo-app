import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';

export const rxjsRoutes: Routes = [
    {
        path: 'forkjoin',
        loadComponent: () => import('./forkjoin/forkjoin.component').then(m => m.ForkjoinComponent)
        //component: ForkjoinComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
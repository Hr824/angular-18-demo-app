import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/errors/page-not-found/page-not-found.component';
import { ErrorOccurredComponent } from './pages/errors/error-occurred/error-occurred.component';
import { ForkjoinComponent } from './pages/rxjs/forkjoin/forkjoin.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'rxjs/forkjoin',
        component: ForkjoinComponent
    },
    {
        path: 'errorOccurred',
        component: ErrorOccurredComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/errors/page-not-found/page-not-found.component';
import { ErrorOccurredComponent } from './pages/errors/error-occurred/error-occurred.component';
import { ForkjoinComponent } from './pages/rxjs/forkjoin/forkjoin.component';
import { MoviesComponent } from './pages/signals/movies/movies.component';
import { SearchMoviesComponent } from './pages/signals/search-movies/search-movies.component';

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
        path: 'signals/delete',
        component: MoviesComponent
    },
    {
        path: 'signals/search',
        component: SearchMoviesComponent
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
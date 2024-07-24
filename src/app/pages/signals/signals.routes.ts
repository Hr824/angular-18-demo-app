import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';

export const signalsRoutes: Routes = [
    {
        path: 'delete',
        loadComponent: () => import('./movies/movies.component').then(m => m.MoviesComponent)
        //component: MoviesComponent
    },
    {
        path: 'search',
        loadComponent: () => import('./search-movies/search-movies.component').then(m => m.SearchMoviesComponent)
        //component: SearchMoviesComponent
    },
    {
        path: 'input',
        loadComponent: () => import('./input-movies/parent.component').then(m => m.ParentComponent)
        //component: ParentComponent
    },
    {
        path: 'model-input',
        loadComponent: () => import('./model-input/parent.component').then(m => m.ParentComponent)
        //component: ParentComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
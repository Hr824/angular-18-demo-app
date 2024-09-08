import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';
import { AppSettings } from '../../app.custom.settings';

export const signalsRoutes: Routes = [
    {
        path: 'movies/delete',
        title: `${AppSettings.APP_TITLE} - Signals : Supression`,
        loadComponent: () => import('./movies/movies.component').then(item => item.MoviesComponent)
    },
    {
        path: 'movies/details/:id',
        title: `${AppSettings.APP_TITLE} - Signals : Détails`,
        loadComponent: () => import('./movies/movie-details.component').then(item => item.MovieDetailsComponent)
    },
    {
        path: 'movies/search',
        title: `${AppSettings.APP_TITLE} - Signals : Recherche`,
        loadComponent: () => import('./search-movies/search-movies.component').then(item => item.SearchMoviesComponent)
    },
    {
        path: 'input',
        title: `${AppSettings.APP_TITLE} - Signals : Input`,
        loadComponent: () => import('./input-movies/parent.component').then(item => item.ParentComponent)
    },
    {
        path: 'model-input',
        title: `${AppSettings.APP_TITLE} - Signals : Model Input`,
        loadComponent: () => import('./model-input/parent.component').then(item => item.ParentComponent)
    },
    {
      path: '**',
      title: `${AppSettings.APP_TITLE} - Erreur 404`,
      component: PageNotFoundComponent
    }
];
import { Routes } from '@angular/router';
import { AppSettings } from '../../app.custom.settings';

export const autresRoutes: Routes = [
    {
        path: 'event/output-function',
        title: `${AppSettings.APP_TITLE} - Autres : output() function`,
        loadComponent: () => import('./output-function/output-function.component').then(item => item.OutputFunctionComponent)
    },
    {
        path: '**',
        title: `${AppSettings.APP_TITLE} - Erreur 404`,
        loadComponent: () =>import('../errors/page-not-found/page-not-found.component').then(item => item.PageNotFoundComponent)
    }
];
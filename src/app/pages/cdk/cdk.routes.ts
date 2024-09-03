import { Routes } from '@angular/router';
import { AppSettings } from '../../app.custom.settings';

export const cdkRoutes: Routes = [
    {
        path: 'drag-and-drop/simple-list',
        title: `${AppSettings.APP_TITLE} - Angular/CDK : Drag and Drop Liste`,
        loadComponent: () => import('./drag-and-drop/simple-list/simple-list.component').then(item => item.SimpleListComponent)
    },
    {
        path: 'drag-and-drop/kanban',
        title: `${AppSettings.APP_TITLE} - Angular/CDK : Drag and Drop Kanban`,
        loadComponent: () => import('./drag-and-drop/kanban/kanban.component').then(item => item.KanbanComponent)
    },
    {
        path: '**',
        title: `${AppSettings.APP_TITLE} - Erreur 404`,
        loadComponent: () =>import('../errors/page-not-found/page-not-found.component').then(item => item.PageNotFoundComponent)
    }
];
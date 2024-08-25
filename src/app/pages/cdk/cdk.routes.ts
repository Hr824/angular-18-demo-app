import { Routes } from '@angular/router';

export const cdkRoutes: Routes = [
    {
        path: 'drag-and-drop/simple-list',
        //component: SimpleListComponent
        loadComponent: () => import('./drag-and-drop/simple-list/simple-list.component').then(item => item.SimpleListComponent)
    },
    {
      path: 'drag-and-drop/kanban',
      //component: KanbanComponent
      loadComponent: () => import('./drag-and-drop/kanban/kanban.component').then(item => item.KanbanComponent)
  },
    {
      path: '**',
      loadComponent: () =>import('../errors/page-not-found/page-not-found.component').then(item => item.PageNotFoundComponent)
      //component: PageNotFoundComponent
    }
];
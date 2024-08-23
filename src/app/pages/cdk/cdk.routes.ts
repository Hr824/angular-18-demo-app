import { Routes } from '@angular/router';
//import { ReorderingListComponent } from './draganddrop/reordering-list/reordering-list.component';

export const cdkRoutes: Routes = [
    {
        path: 'drag-and-drop/simple-list',
        //component: SimpleListComponent
        loadComponent: () => import('./drag-and-drop/simple-list/simple-list.component').then(item => item.SimpleListComponent)
    },
    {
      path: '**',
      loadComponent: () =>import('../errors/page-not-found/page-not-found.component').then(item => item.PageNotFoundComponent)
      //component: PageNotFoundComponent
    }
];
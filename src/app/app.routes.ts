import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/errors/page-not-found/page-not-found.component';
import { ErrorOccurredComponent } from './pages/errors/error-occurred/error-occurred.component';
import { TemperatureChartComponent } from './pages/chartjs/temperature-chart/temperature-chart.component';
import { MenuFormComponent } from './pages/reactive-forms/menu-form/menu-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'rxjs',
        loadChildren: () => import('./pages/rxjs/rxjs.routes').then(item =>item.rxjsRoutes)
    },
    {
        path: 'signals',
        loadChildren: () => import('./pages/signals/signals.routes').then(item =>item.signalsRoutes)
    },
    {
        path: 'chartjs/temperature',
        component: TemperatureChartComponent
    },
    {
        path: 'reactiveform/menu',
        component: MenuFormComponent
    },
    {
        path: 'ngrx',
        loadChildren: () => import('./pages/ngrx/ngrx.routes').then(item =>item.ngrxRoutes)
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
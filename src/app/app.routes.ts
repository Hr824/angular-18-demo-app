import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/errors/page-not-found/page-not-found.component';
import { ErrorOccurredComponent } from './pages/errors/error-occurred/error-occurred.component';
import { TemperatureChartComponent } from './pages/chartjs/temperature-chart/temperature-chart.component';
import { MenuFormComponent } from './pages/reactive-forms/menu-form/menu-form.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
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
        path: 'chartjs/dashboard',
        loadComponent: () => import('./pages/chartjs/dashboard-user/dashboard-user.component').then(item => item.DashboardUserComponent)
    },
    {
        path: 'reactiveform/menu',
        component: MenuFormComponent
    },
    {
        path: 'reactiveform/questionnaire',
        loadComponent: () => import('./pages/reactive-forms/dynamic-form/dynamic-form.component').then(item => item.DynamicFormComponent)
    },
    {
        path: 'ngrx',
        loadChildren: () => import('./pages/ngrx/ngrx.routes').then(item =>item.ngrxRoutes)
    },
    {
        path: 'cdk',
        loadChildren: () => import('./pages/cdk/cdk.routes').then(item =>item.cdkRoutes)
    },
    {
        path: 'admin/dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'errorOccurred',
        component: ErrorOccurredComponent
    },
    {
        path: 'pageNotFound',
        component: PageNotFoundComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
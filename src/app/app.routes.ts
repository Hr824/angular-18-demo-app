import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/errors/page-not-found/page-not-found.component';
import { ErrorOccurredComponent } from './pages/errors/error-occurred/error-occurred.component';
import { TemperatureChartComponent } from './pages/chartjs/temperature-chart/temperature-chart.component';
import { MenuFormComponent } from './pages/reactive-forms/menu-form/menu-form.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { RegisterFormComponent } from './pages/template-driven-forms/register-form/register-form.component';
import { authGuard } from './guards/auth.guard';
import { AppSettings } from './app.custom.settings';

export const routes: Routes = [
    {
        path: '',
        title: `${AppSettings.APP_TITLE} - Accueil`,
        component: HomeComponent
    },
    {
        path: 'login',
        title: `${AppSettings.APP_TITLE} - Connexion`,
        component: LoginComponent
    },
    {
        path: 'logout',
        title: `${AppSettings.APP_TITLE} - Déconnexion`,
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
        title: `${AppSettings.APP_TITLE} - Chart.js : Bar Chart`,
        component: TemperatureChartComponent
    },
    {
        path: 'chartjs/dashboard',
        title: `${AppSettings.APP_TITLE} - Chart.js : dashboard`,
        loadComponent: () => import('./pages/chartjs/dashboard-user/dashboard-user.component').then(item => item.DashboardUserComponent)
    },
    {
        path: 'reactiveform/menu',
        title: `${AppSettings.APP_TITLE} - Reactive Forms : Menu`,
        component: MenuFormComponent
    },
    {
        path: 'reactiveform/questionnaire',
        title: `${AppSettings.APP_TITLE} - Reactive Forms : Questionnaire dynamique`,
        loadComponent: () => import('./pages/reactive-forms/dynamic-form/dynamic-form.component').then(item => item.DynamicFormComponent)
    },
    {
        path: 'template-driven-form/inscription',
        title: `${AppSettings.APP_TITLE} - Template-driven Forms : Inscription`,
        component: RegisterFormComponent
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
        title: `${AppSettings.APP_TITLE} - Admin : Dashboard`,
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'errorOccurred',
        title: `${AppSettings.APP_TITLE} - Erreur`,
        component: ErrorOccurredComponent
    },
    {
        path: 'pageNotFound',
        title: `${AppSettings.APP_TITLE} - Erreur 404`,
        component: PageNotFoundComponent
    },
    {
        path: '**',
        title: `${AppSettings.APP_TITLE} - Erreur 404`,
        component: PageNotFoundComponent
    }
];
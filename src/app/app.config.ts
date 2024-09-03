import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { InMemoryDataService } from './api/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './store/cart/cart.effects';
import { errorInterceptor } from './interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500, passThruUnknownUrl: true })),
    provideStore({ cart: cartReducer }),
    provideEffects([CartEffects])
 ]
};


export const constants = {
  AUTH_TOKEN: 'auth_token'
};

const apiUrl = 'api';

export const apiEndpoints = {
  ARTICLES: `${apiUrl}/articles`,
  BOOKS: `${apiUrl}/books`,
  AUTHORS: `${apiUrl}/authors`,
  TEMPERATURES: `${apiUrl}/temperatures`,
  VENTES_MENSUELLES: `${apiUrl}/ventesMensuelles`,
  MOVIES: `${apiUrl}/movies`,
  DIRECTORS: `${apiUrl}/directors`,
  QUESTIONS: `${apiUrl}/questions`,
};
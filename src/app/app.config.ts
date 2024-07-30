import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryDataService } from './api/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './store/cart/cart.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500, passThruUnknownUrl: true })),
    provideStore({ cart: cartReducer }),
    provideEffects([CartEffects])
 ]
};
import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AppSettings } from '../app.custom.settings';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router: Router = inject(Router);
  const tokenService = inject(TokenService);
  const authToken = tokenService.getToken(AppSettings.AUTH_TOKEN_KEY);

  let authReq: HttpRequest<unknown>;
  if(authToken){
    //console.log('AUTHTOKEN', authToken)
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      },
      withCredentials: true
    });
  }
  else{
    authReq = req.clone({
      withCredentials: true
    });
  }

  //console.log('AUTHREQ', authReq);

  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 0:
            console.log("Network error");
            router.navigate(['/errorOccurred']);
            break;
          case 400:
            console.log("400 Bad Request");
            router.navigate(['/errorOccurred']);
            break;
          case 401:
            console.log("401 Unauthorized");
            router.navigate(['/errorOccurred']);
            break;
          case 403:
            console.log("403 Forbidden");
            router.navigate(['/errorOccurred']);
            break;
          case 404:
              console.log("404 Not Found");
              router.navigate(['/pageNotFound']);
              break;
          case 500:
            console.log("500 Internal Server Error");
            router.navigate(['/errorOccurred']);
            break;
          case 503:
              console.log("503 Service Unavailable");
              router.navigate(['/errorOccurred']);
              break;
          default:
            console.log(err.name + ', ' + err.message);
            router.navigate(['/errorOccurred']);
            break;
        } 
      } else {
        if(err.status === 404 && err.statusText === 'Not Found' && err.url.includes('api/movies/')){
          //Dans MovieService, erreur getMovieById(id: number) quand l'id n'existe pas
          //L'erreur est gérée dans le component (MovieDetailsComponent) qui appelle la méthode du service         
          //console.log("404 Movie Not Found");
        }
        else{
          console.log('Not HTTP error', JSON.stringify(err) + ', Name: ' + err.name + ', Message: ' + err.message);
          router.navigate(['/errorOccurred']);
        }
      }

      //return throwError(() => err); 
      return next(authReq);
    })
  ); 
};
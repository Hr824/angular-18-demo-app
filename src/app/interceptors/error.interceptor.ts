import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router: Router = inject(Router);

  return next(req).pipe(
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
        console.log('Not HTTP error', err.name + ', ' + err.message);
        router.navigate(['/errorOccurred']);
      }

      //return throwError(() => err); 
      return next(req);
    })
  ); 
};
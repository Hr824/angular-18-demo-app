import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Injector, Signal } from '@angular/core';
import { Director, Movie } from '../models/movie';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly MOVIE_API_URL = 'api/movies';
  private readonly DIRECTOR_API_URL = 'api/directors';

  constructor(private httpClient: HttpClient) {}
  //private injector = inject(Injector);

  getMovies(): Observable<Movie[]> {
    const movies$ = this.httpClient.get<Movie[]>(this.MOVIE_API_URL);

    return movies$;
  }

  getDirectors(): Observable<Director[]> {
    const directors$ = this.httpClient.get<Director[]>(this.DIRECTOR_API_URL);

    return directors$;
  }



  // getMovies2(): Signal<Movie[] | undefined> {
  //   const movies$ = this.httpClient.get<Movie[]>(this.MOVIE_API_URL);

  //   return toSignal(movies$, { injector: this.injector, initialValue: [] });
  // }

  // getDirectors2(): Signal<Director[] | undefined> {
  //   const directors$ = this.httpClient.get<Director[]>(this.DIRECTOR_API_URL);

  //   return toSignal(directors$, { injector: this.injector, initialValue: [] });
  // }
}
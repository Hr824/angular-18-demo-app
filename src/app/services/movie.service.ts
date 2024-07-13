import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Director, Movie } from '../models/movie';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { InMemoryDataService } from '../api/in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly MOVIE_API_URL = 'api/movies';
  private readonly DIRECTOR_API_URL = 'api/directors';

  constructor(private httpClient: HttpClient, private dataService: InMemoryDataService) {}

  getMovies(): Observable<Movie[]> {
    const movies$ = this.httpClient.get<Movie[]>(this.MOVIE_API_URL);

    return movies$;
  }

  getDirectors(): Observable<Director[]> {
    const directors$ = this.httpClient.get<Director[]>(this.DIRECTOR_API_URL);

    return directors$;
  }

  deleteMovie(id: number){
    return this.httpClient.delete(`${this.MOVIE_API_URL}/${id}`);
  }


  resetDatabase(collection: string): Observable<any> {
    return this.httpClient.post(`commands/resetdb/${collection}`, {});
  }


  // getMoviesSignal(): Signal<Movie[] | undefined> {
  //   const movies$ = this.httpClient.get<Movie[]>(this.MOVIE_API_URL);
  //   return toSignal(movies$, { injector: this.injector, initialValue: [] });
  // }

  // getDirectorsSignal(): Signal<Director[] | undefined> {
  //   const directors$ = this.httpClient.get<Director[]>(this.DIRECTOR_API_URL);
  //   return toSignal(directors$, { injector: this.injector, initialValue: [] });
  // }
}
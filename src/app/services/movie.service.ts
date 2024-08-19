import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Director, Movie } from '../models/movie';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly MOVIE_API_URL = 'api/movies';
  private readonly DIRECTOR_API_URL = 'api/directors';

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const movies$ = this.httpClient.get<Movie[]>(this.MOVIE_API_URL);

    return movies$;
  }

  getDirectors(): Observable<Director[]> {
    const directors$ = this.httpClient.get<Director[]>(this.DIRECTOR_API_URL)
    .pipe(
      map(directors => directors.map(director => {
        return {
          id: director.id,
          firstname: director.firstname,
          lastname: director.lastname.toUpperCase()
        }
      }))
    );

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


  getMoviesWithDirectors(): Observable<Movie[]> {
    const movies$ = this.getMovies();
    const directors$ = this.getDirectors();

    const moviesWithDirectors$: Observable<Movie[]> = forkJoin([movies$, directors$]).pipe(
      map(([movies, directors]) => 
          movies.map(movie => ({
              ...movie,
              director: directors.find(director => director.id === movie.directorId)
          }))
      )
    );

    return moviesWithDirectors$;
  }
}
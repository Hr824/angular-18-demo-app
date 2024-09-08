import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Director, Movie } from '../models/movie';
import { AppSettings } from '../app.custom.settings';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const movies$ = this.httpClient.get<Movie[]>(AppSettings.API_END_POINTS.MOVIES);
    return movies$;
  }

  getMovieById(id: number): Observable<Movie> {
    const movie$ = this.httpClient.get<Movie>(`${AppSettings.API_END_POINTS.MOVIES}/${id}`)
    .pipe(
      map(movie => { return movie; })
      //#######################
      //Si on gère l'erreur ici
      //#######################
      // catchError(err => {
        // 1ère solution, on lève une erreur
        // throw 'Error in getMovieById(id: number). Details: ' + JSON.stringify(err);

        // 2nde solution, on retourne un Movie avec id=0 et on gère l'affichage dans le component
        // return of<Movie>({
        //   id: 0,
        //   title: 'Ce film n\'existe pas',
        //   year: 0,
        //   duration: '',
        //   synopsis: '',
        //   directorId: 0,
        //   type: [],
        //   actors: []
        // });
      // })
    );
    
    return movie$;
  }

  getDirectors(): Observable<Director[]> {
    const directors$ = this.httpClient.get<Director[]>(AppSettings.API_END_POINTS.DIRECTORS)
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

  getDirectorById(id: number): Observable<Director>{
    const director$ = this.httpClient.get<Director>(`${AppSettings.API_END_POINTS.DIRECTORS}/${id}`)
    .pipe(
      map(director => {
        return {
          id: director.id,
          firstname: director.firstname,
          lastname: director.lastname.toUpperCase()
        }
      })
    );

    return director$;
  }

  deleteMovie(id: number){
    return this.httpClient.delete(`${AppSettings.API_END_POINTS.MOVIES}/${id}`);
  }

  resetDatabase(collection: string): Observable<any> {
    return this.httpClient.post(`${AppSettings.API_END_POINTS.RESET_DB}/${collection}`, {});
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

  getMovieByIdWithDirector(movieId: number): Observable<Movie> {
    const movie$ = this.getMovieById(movieId);
    const directors$ = this.getDirectors();

    const movieWithDirector$: Observable<Movie> = forkJoin([movie$, directors$])
    .pipe(
      map(([movie, directors]) => 
          ({
              ...movie,
              director: directors.find(director => director.id === movie.directorId)
          })
      )
    );

    return movieWithDirector$;
  }
}
import { Component, computed, inject, Injector, OnDestroy, OnInit, signal, Signal } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie';
import { toSignal } from '@angular/core/rxjs-interop';
import { concatMap, forkJoin, map, Observable, Subscription } from 'rxjs';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit, OnDestroy {
    
    //====================
    //Avec WritableSignal 
    //====================
    movies = signal<Movie[]>([]);
    moviesCount = computed(() => this.movies().length);
    subscriptions: Subscription = new Subscription();

    //====================
    //Avec Signal readonly
    //====================
    //movies!: Signal<Movie[] | undefined>;
    //moviesCount = computed(() => this.movies()?.length);



    movieService = inject(MovieService);
    //private injector = inject(Injector);


    ngOnInit(): void {
        this.getMovies();
    }

    ngOnDestroy(): void {
      //====================
      //Avec WritableSignal 
      //====================
      this.subscriptions .unsubscribe();
    }

    getMoviesWithDirectors(): Observable<Movie[]> {
      const movies$ = this.movieService.getMovies();
      const directors$ = this.movieService.getDirectors();

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


    getMovies(): void {
      const moviesWithDirectors$ = this.getMoviesWithDirectors();
 
      this.subscriptions.add(moviesWithDirectors$.subscribe({
        next: data => { this.movies.set(data) }
      }));

      //====================
      //Avec Signal readonly
      //====================
      //this.movies = toSignal(moviesWithDirectors$, { injector: this.injector, initialValue: [] });    
    }

    
    deleteMovie(id: number): void {
      this.subscriptions.add(this.movieService.deleteMovie(id).subscribe());

      this.getMovies();
    }

    initMoviesTable(): void {
      const moviesWithDirectors$ = this.movieService.resetDatabase('movies').pipe(
        concatMap(() => this.getMoviesWithDirectors())
      );

      //====================
      //Avec WritableSignal 
      //====================
      this.subscriptions.add(moviesWithDirectors$.subscribe({
        next: data => this.movies.set(data)
      }));

      //====================
      //Avec Signal readonly
      //====================
      //this.movies = toSignal(moviesWithDirectors$, { injector: this.injector, initialValue: [] });
    }
}
import { Component, computed, inject, Injector, OnDestroy, OnInit, signal, Signal } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie';
import { toSignal } from '@angular/core/rxjs-interop';
import { forkJoin, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit, OnDestroy {
    
    //====================
    //Avec Signal readonly
    //====================
    movies!: Signal<Movie[] | undefined>;
    moviesCount = computed(() => this.movies()?.length);

    //====================
    //Avec WritableSignal 
    //====================
    // moviesList = signal<Movie[]>([]);
    // moviesListCount = computed(() => this.moviesList().length);
    // subscription: Subscription = new Subscription();


    movieService = inject(MovieService);
    private injector = inject(Injector); //Pour utiliser toSignal() dans OnInit


    ngOnInit(): void {

      const movies$ = this.movieService.getMovies();
      const directors$ = this.movieService.getDirectors();

      const moviesWithDirectors$ = forkJoin([movies$, directors$]).pipe(
        map(([movies, directors]) => 
            movies.map(movie => ({
                ...movie,
                director: directors.find(director => director.id === movie.directorId)
            }))
        )
      );

      //====================
      //Avec Signal readonly
      //====================
      // this.movies = toSignal(this.movieService.getMovies(), { injector: this.injector, initialValue: [] });
      this.movies = toSignal(moviesWithDirectors$, { injector: this.injector, initialValue: [] });


      //====================
      //Avec WritableSignal 
      //====================
      // this.subscription = moviesWithDirectors$.subscribe({
      //     next: data => this.moviesList.set(data)
      // })
    }

    ngOnDestroy(): void {
      //====================
      //Avec WritableSignal 
      //====================
      //this.subscription.unsubscribe();
    }
}

import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { concatMap, Subscription } from 'rxjs';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../services/movie.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [LoaderComponent, BreadcrumbComponent ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit, OnDestroy {
    
    theme = signal<string>('Signals');
    page = signal<string>('Suppression');

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


    getMovies(): void {
      const moviesWithDirectors$ = this.movieService.getMoviesWithDirectors();
 
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
        concatMap(() => this.movieService.getMoviesWithDirectors())
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
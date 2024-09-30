import { Component, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../../../services/movie.service';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { Movie } from '../../../models/movie';
import { ChildComponent } from './child.component';


@Component({
  selector: 'app-output-function',
  standalone: true,
  imports: [ChildComponent, BreadcrumbComponent, LoaderComponent],
  templateUrl: './output-function.component.html',
  styleUrl: './output-function.component.css'
})
export class OutputFunctionComponent {

  theme: string = 'Autres';
  theme1: string = 'Events';
  page: string = 'output() function';

  movies = signal<Movie[]>([]);

  movie = signal<Movie | null>(null);

  subscriptions: Subscription = new Subscription();

  movieService = inject(MovieService);

  ngOnInit() {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMovies() {
    this.subscriptions.add(this.movieService.getMoviesWithDirectors()
        .subscribe({
          next: m => this.movies.set(m)
        }));
  }

  getMovieByIdWithDirector(id: number): void {
    const movieWithDirector$ = this.movieService.getMovieByIdWithDirector(id);

    this.subscriptions.add(movieWithDirector$.subscribe({
      next: data => { 
        //console.log('DATA', data);
        this.movie.set(data);
      },
      error: err => {
        //console.log('ERREUR = ', err);  
      }
    })); 
  }

  getSelectedMovieDetails(event: Event){
    const movieId: number = Number((event.currentTarget as HTMLElement).id);

    this.getMovieByIdWithDirector(movieId);
  }
}
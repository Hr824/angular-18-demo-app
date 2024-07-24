import { Component, computed, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../services/movie.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, BreadcrumbComponent, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, OnDestroy {

  theme = signal<string>('Signals');
  page = signal<string>('Input');

  movies = signal<Movie[]>([]);
  subscriptions: Subscription = new Subscription();
  movieService = inject(MovieService);

  selectedOption = signal('0');
  selectedMovie = computed<Movie>(() => {
    return this.movies().filter(movie => movie.id.toString() === this.selectedOption())[0];
  });

  constructor() {
    // effect(() => {
    //   console.log(`The selected option is: ${this.selectedOption()}`);
    //   console.log(`The selected movie is: ${this.selectedMovie()?.title}`);
    // });
  }

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.subscriptions .unsubscribe();
  }


  getMovies(): void {
    const moviesWithDirectors$ = this.movieService.getMoviesWithDirectors();

    this.subscriptions.add(moviesWithDirectors$.subscribe({
      next: data => { this.movies.set(data) }
    }));    
  }


  onChange(event: Event) {
    let elmt = event.target as HTMLSelectElement;
    this.selectedOption.set(elmt.value);
  }
}
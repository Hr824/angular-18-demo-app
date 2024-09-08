import { Component, inject, Input, numberAttribute, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../services/movie.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink, LoaderComponent, BreadcrumbComponent, JsonPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  //On transforme le type string du paramètre id en type number
  @Input({transform: numberAttribute}) id = 0;

  theme: string = 'Signals';
  page: string = 'Détails';

  message = signal<string>('');

  movie = signal<Movie>({
    id: 0,
    title: '',
    year: 0,
    duration: '',
    synopsis: '',
    directorId: 0,
    types: [],
    actors: []
  });

  subscriptions: Subscription = new Subscription();

  movieService = inject(MovieService);

  ngOnInit(): void {
    this.getMovieByIdWithDirector(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMovieByIdWithDirector(id: number): void {
    const movieWithDirector$ = this.movieService.getMovieByIdWithDirector(id);

    this.subscriptions.add(movieWithDirector$.subscribe({
      next: data => { 
        //console.log('DATA', data);
        this.movie.set(data);
      },
      error: err => {
        this.message.set('Aucun résultat disponible');
        //console.log('ERREUR = ', err);  
      }
    })); 
  }
}
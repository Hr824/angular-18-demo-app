import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../services/movie.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-search-movies',
  standalone: true,
  imports: [BreadcrumbComponent, LoaderComponent],
  templateUrl: './search-movies.component.html',
  styleUrl: './search-movies.component.css'
})
export class SearchMoviesComponent implements OnInit {
  
  theme = signal<string>('Signals');
  page = signal<string>('Recherche');

  searchFilter = signal<string>('');

  moviesS = signal<Movie[]>([]);

  movies = computed<Movie[]>(() => {
    const filter = this.searchFilter();
    return this.moviesS()
               .filter(movie => 
                          movie.title.toLowerCase().includes(filter) ||
                          movie.year.toString().includes(filter) ||
                          movie.duration.toLowerCase().includes(filter) ||
                          movie.director?.firstname.toLowerCase().includes(filter) ||
                          movie.director?.lastname.toLowerCase().includes(filter));
  });

  moviesCount = computed(() => this.movies().length);
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
          next: m => this.moviesS.set(m)
        }));
  }


  filterResults(filter: string) {
    this.searchFilter.set(filter);
  }

  //With viewChild() signal
  // searchField = viewChild.required<ElementRef<HTMLInputElement>>('searchField');
  // filterResults2() {
  //   const elmt = this.searchField().nativeElement;
  //   this.searchFilter.set(elmt.value);
  // }
}
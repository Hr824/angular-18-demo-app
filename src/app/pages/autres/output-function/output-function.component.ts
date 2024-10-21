import { AfterViewInit, Component, inject, OnDestroy, OnInit, QueryList, signal, viewChildren, ViewChildren } from '@angular/core';
import { concatMap, Subscription } from 'rxjs';
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
export class OutputFunctionComponent implements OnInit, OnDestroy { //, AfterViewInit {
  //TEST FOR @ViewChildren
  //@ViewChildren(ChildComponent) childReferences!: QueryList<ChildComponent>;
  
  //TEST FOR viewChildren signal
  //children = viewChildren(ChildComponent);

  theme: string = 'Autres';
  theme1: string = 'Events';
  page: string = 'output() function';

  movies = signal<Movie[]>([]);

  selectedMovie = signal<Movie | null>(null);

  subscriptions: Subscription = new Subscription();

  movieService = inject(MovieService);

  ngOnInit(): void {
    this.getMovies();
  }

  //TEST FOR @ViewChildren
  // btnTextes = signal<string[]>([]);
  // ngAfterViewInit(): void { 
  //   this.subscriptions.add(this.childReferences.changes
  //     .subscribe({
  //       next: (queryList: QueryList<ChildComponent>) => { 
  //         queryList.forEach(childComp => {
  //           this.btnTextes.update(values => [...values, childComp.buttonText()]);
  //         });
  //       }
  //     })
  //   );
  // }

  //TEST FOR viewChildren signal
  // showChildren(){
  //   this.children().forEach(child => console.log(child.buttonText()))
  // }
  // ngAfterViewInit(): void { 
  //   //Ajout setTimeout sinon this.children() est vide dans @defer
  //   setTimeout(() => {
  //     this.children().forEach(child => console.log(child.buttonText()))
  //   }, 3000);
  // }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMovies() {
    this.subscriptions.add(this.movieService.getMoviesWithDirectors()
        .subscribe({
          next: m => this.movies.set(m)
        }));
  }


  getSelectedMovieDetails(event: Event){
    const movieId: number = Number((event.currentTarget as HTMLElement).id);

    const movieWithDirector$ = this.movieService.getMovieByIdWithDirector(movieId);

    this.subscriptions.add(movieWithDirector$.subscribe({
      next: data => { 
        this.selectedMovie.set(data);
      },
      error: err => {
        //console.log('ERREUR = ', err);  
      }
    })); 
  }



  initMoviesList(): void {
    const moviesWithDirectors$ = this.movieService.resetDatabase('movies').pipe(
      concatMap(() => this.movieService.getMoviesWithDirectors())
    );

    this.subscriptions.add(moviesWithDirectors$.subscribe({
      next: data => this.movies.set(data)
    }));
  }
}
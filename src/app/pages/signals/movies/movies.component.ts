import { Component, computed, inject, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { concatMap, Subscription } from 'rxjs';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../services/movie.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
//import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
//import { toSignal } from '@angular/core/rxjs-interop';

//###################################
//Modal pour la suppression d'un film
//###################################
// @Component({
// 	selector: 'ngbd-modal-confirm',
// 	standalone: true,
// 	template: `
// 		<div class="modal-header" ngbAutofocus>
// 			<h4 class="modal-title" id="modal-title">Suppression</h4>
// 			<button
// 				type="button"
// 				class="btn-close"
// 				aria-describedby="modal-title"
//         (click)="modal.dismiss('Annuler')"
// 			></button>
// 		</div>
// 		<div class="modal-body">
// 			<p>
// 				<strong>Êtes-vous sûr de vouloir supprimer <span class="text-primary">"{{movie.title}}" ({{movie.director?.firstname}} {{movie.director?.lastname}})</span> ?</strong>
// 			</p>
// 			<p>
//         Toutes les informations du film seront définitivement supprimées.
// 			</p>
// 		</div>
// 		<div class="modal-footer">
// 			<button type="button" class="btn btn-sm btn-outline-secondary rounded-pill" (click)="modal.dismiss('Annuler')">Annuler</button>
// 			<button type="button" class="btn btn-sm btn-outline-danger rounded-pill" (click)="modal.close(movie.id)">Supprimer</button>
// 		</div>
// 	`,
// })
// export class NgbdModalConfirmComponent {
// 	modal = inject(NgbActiveModal);

//   @Input()
//   movie: Movie = {
//     id: 0,
//     title: '',
//     year: 0,
//     duration: '',
//     synopsis: '',
//     directorId: 0,
//     director: { id: 0, firstname: '', lastname: '' }
//   };
// }
//#######################################
//Fin Modal pour la suppression d'un film
//#######################################



@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [LoaderComponent, BreadcrumbComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit, OnDestroy {
    
    // //Version avec Modal pour supprimer un film
    // private modalService = inject(NgbModal);
    // openDeleteModal(movie: Movie) {
    //   //https://github.com/ng-bootstrap/ng-bootstrap/issues/4703
    //   //Ajout de animation: false car provideExperimentalZonelessChangeDetection ne fonctionne pas avec ng-bootstrap v17
    //   const modalRef: NgbModalRef = this.modalService.open(NgbdModalConfirmComponent, { backdrop: "static", centered: true, keyboard: false, animation: false });
    //   modalRef.componentInstance.movie = movie;

    //   modalRef.result.then((result) => {
    //     let movieId: number = Number(result);
    //     //console.log('RESULT', JSON.stringify(result));
    //     this.movieService.deleteMovie(movieId).subscribe({
    //       next: (response) => {
    //         //console.log('RESPONSE', JSON.stringify(response));
    //         this.getMovies();
    //       }
    //     });
    //   },
    //   (error) => {
    //     //on error/dismiss
    //     //console.log('ERREUR', error);
    //   });
    // }


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
import { Component, inject } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { Author } from '../../../models/author';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';
import { AuthorService } from '../../../services/author.service';

@Component({
  selector: 'app-forkjoin',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.css'
})
export class ForkjoinComponent {
  
  books$!: Observable<Book[]>;
  authors$!: Observable<Author[]>;
  booksWithAuthors$!: Observable<Book[]>;
  
  bookService = inject(BookService);
  authorService = inject(AuthorService);


  ngOnInit(): void {

    this.books$ = this.bookService.getBooks();
    this.authors$ = this.authorService.getAuthors();

    //Avec combineLatest()
    //####################
    // this.booksWithAuthors$ = combineLatest([this.books$, this.authors$]).pipe(
    //   map(([books, authors]) => 
    //       books.map(book => ({
    //           ...book,
    //           author: authors.find(author => author.authorId === book.authorId)
    //       }))
    //   )
    // );


    //Avec forkJoin()
    //###############
    //Utiliser forkJoin est approprié lorsque vous avez des observables qui émettent une seule valeur
    //(comme des appels API qui renvoient des listes de livres et d'auteurs).
    //forkJoin attend que toutes les observables aient émis une valeur,
    //puis il combine ces valeurs en une seule émission.
    this.booksWithAuthors$ = forkJoin([this.books$, this.authors$]).pipe(
      map(([books, authors]) => 
          books.map(book => ({
              ...book,
              author: authors.find(author => author.id === book.authorId)
          }))
      )
    );

    // this.booksWithAuthors$.subscribe({
    //   next: c => { console.log('BOOKSWITHAUTHORS', c) }
    // });
  }
}

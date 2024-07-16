import { Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Author } from '../../../models/author';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-forkjoin',
  standalone: true,
  imports: [BreadcrumbComponent, LoaderComponent, AsyncPipe],
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.css'
})
export class ForkjoinComponent {
  
  theme = signal<string>('RxJS');
  page = signal<string>('forkJoin');

  books$!: Observable<Book[]>;
  authors$!: Observable<Author[]>;
  booksWithAuthors$!: Observable<Book[]>;
  
  bookService = inject(BookService);

  ngOnInit(): void {

    this.books$ = this.bookService.getBooks();
    this.authors$ = this.bookService.getAuthors();

    this.booksWithAuthors$ = this.bookService.getBooksWithAuthors();
  }
}
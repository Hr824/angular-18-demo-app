import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { Director, Movie } from '../models/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  private initialAuthors: Author[] = [
    { id: 1, firstname: 'Albert', lastname: 'Camus' },
    { id: 2, firstname: 'Victor', lastname: 'Hugo' },
    { id: 3, firstname: 'Alexandre', lastname: 'Dumas' }
  ];
       
  private initialBooks: Book[] = [
      { id: 1, title: 'Le comte de Monte-Cristo', authorId: 3 },
      { id: 2, title: 'La peste', authorId: 1 },
      { id: 3, title: 'Les misérables', authorId: 2 },
      { id: 4, title: 'L\'étranger', authorId: 1 }
  ];

  private initialMovies: Movie[] = [
    { id: 1, title: 'Orange mécanique', year: 1971, duration: '2h16 min', directorId: 1 },
    { id: 2, title: 'Reservoir Dog', year: 1992, duration: '1h39 min', directorId: 2 },
    { id: 3, title: 'Fight Club', year: 1999, duration: '2h19 min', directorId: 3 },
    { id: 4, title: 'Mad Max', year: 1979, duration: '1h33 min', directorId: 4 },
    { id: 5, title: 'Shining', year: 1980, duration: '1h59 min', directorId: 1 },
    { id: 6, title: 'Rusty James', year: 1983, duration: '1h34 min', directorId: 5 },
    { id: 7, title: 'Apocalypse Now', year: 1979, duration: '2h27 min', directorId: 5 },
    { id: 8, title: 'Usual Suspects', year: 1995, duration: '1h46 min', directorId: 6 },
    { id: 9, title: 'Terminator', year: 1984, duration: '1h47 min', directorId: 7 },
    { id: 10, title: 'Million Dollar Baby', year: 2004, duration: '2h12 min', directorId: 8 }
  ];

  private initialDirectors: Director[] = [
    { id: 1, firstname: 'Stanley', lastname: 'Kubrick' },
    { id: 2, firstname: 'Quentin', lastname: 'Tarantino' },
    { id: 3, firstname: 'David', lastname: 'Fincher' },
    { id: 4, firstname: 'George', lastname: 'Miller' },
    { id: 5, firstname: 'Francis', lastname: 'Ford Coppola' },
    { id: 6, firstname: 'Brian', lastname: 'Singer' },
    { id: 7, firstname: 'James', lastname: 'Cameron' },
    { id: 8, firstname: 'Clint', lastname: 'Eastwood' }
  ];

  db: any = {};

  createDb(reqInfo?: RequestInfo) {
      if(reqInfo?.collectionName !== 'resetdb'){
        this.resetDb();
      }else{
        switch(reqInfo.id){
          case 'authors':
            this.db.authors = [...this.initialAuthors];
            break;
          case 'books':
            this.db.books = [...this.initialBooks];
            break;
          case 'movies':
            this.db.movies = [...this.initialMovies];
            break;
          case 'directors':
            this.db.directors = [...this.initialDirectors];
            break;
          default:
            this.resetDb();
            break;
        }
      }

      return this.db;
      //return { authors, books, movies, directors };
  }


   resetDb() {
    this.db = {
      authors: [...this.initialAuthors],
      books: [...this.initialBooks],
      movies: [...this.initialMovies],
      directors: [...this.initialDirectors],
    };
   }
}
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { Director, Movie } from '../models/movie';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        const authors: Author[] = [
            { id: 1, firstname: 'John', lastname: 'Doe' },
            { id: 2, firstname: 'Jane', lastname: 'Smith' },
            { id: 3, firstname: 'Jim', lastname: 'Brown' }
          ];
               
        const books: Book[] = [
            { id: 1, title: 'Book One', authorId: 1 },
            { id: 2, title: 'Book Two', authorId: 2 },
            { id: 3, title: 'Book Three', authorId: 3 },
            { id: 4, title: 'Book Four', authorId: 3 }
        ];

        const movies: Movie[] = [
          { id: 1, title: 'Orange mécanique', year: 1971, duration: '2h16 min', directorId: 1 },
          { id: 2, title: 'Reservoir Dog', year: 1992, duration: '1h39 min', directorId: 2 },
          { id: 3, title: 'Fight Club', year: 1999, duration: '2h19 min', directorId: 3 },
          { id: 4, title: 'Mad Max', year: 1979, duration: '1h33 min', directorId: 4 },
          { id: 5, title: 'Shining', year: 1980, duration: '1h59 min', directorId: 1 },
          { id: 6, title: 'Rusty James', year: 1983, duration: '1h34 min', directorId: 5 },
          { id: 7, title: 'Apocalypse Now', year: 1979, duration: '2h27 min', directorId: 5 },
          { id: 8, title: 'Usual Suspects', year: 1995, duration: '1h46 min', directorId: 6 },
          { id: 9, title: 'Terminator', year: 1984, duration: '1h47 min', directorId: 7 }
        ];

        const directors: Director[] = [
          { id: 1, firstname: 'Stanley', lastname: 'Kubrick' },
          { id: 2, firstname: 'Quentin', lastname: 'Tarantino' },
          { id: 3, firstname: 'David', lastname: 'Fincher' },
          { id: 4, firstname: 'George', lastname: 'Miller' },
          { id: 5, firstname: 'Francis', lastname: 'Ford Coppola' },
          { id: 6, firstname: 'Brian', lastname: 'Singer' },
          { id: 7, firstname: 'James', lastname: 'Cameron' }
        ];

      return { authors, books, movies, directors };
    }
}
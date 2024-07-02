import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/book';
import { Author } from '../models/author';

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

      return { authors, books };
    }
}
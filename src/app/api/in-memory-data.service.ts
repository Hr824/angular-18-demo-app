import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { Director, Movie } from '../models/movie';
import { Temperature } from '../models/temperature';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

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
    { id: 1, title: 'Orange mécanique', year: 1971, duration: '2h16 min', directorId: 1, synopsis: 'Au XXIème siècle, où règnent la violence et le sexe, Alex, jeune chef de bande, exerce avec sadisme une terreur aveugle...' },
    { id: 2, title: 'Reservoir Dog', year: 1992, duration: '1h39 min', directorId: 2, synopsis: 'Six truands désignés par des noms de code entreprennent de dévaliser une bijouterie sous la direction de Joe Cabot et de son fils Nice Guy Eddie. L\'opération échoue et se solde par un bain de sang...' },
    { id: 3, title: 'Fight Club', year: 1999, duration: '2h19 min', directorId: 3, synopsis: 'Le narrateur, sans identité précise, vit seul, travaille seul, dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d\'autres personnes seules qui connaissent la misère humaine, morale et sexuelle...' },
    { id: 4, title: 'Mad Max', year: 1979, duration: '1h33 min', directorId: 4, synopsis: 'Sur les autoroutes désertées d\'une Australie méconnaissable, une guerre sans merci oppose motards hors-la-loi et policiers Interceptor, qui tentent de triompher de la vermine au volant de voitures aux moteurs surgonflés...' },
    { id: 5, title: 'Shining', year: 1980, duration: '1h59 min', directorId: 1, synopsis: 'Écrivain, Jack Torrance est engagé comme gardien, pendant tout l’hiver, d’un grand hôtel isolé du Colorado – l’Overlook – où il espère surmonter enfin sa panne d’inspiration. Il s’y installe avec sa femme Wendy et son fils Danny...' },
    { id: 6, title: 'Rusty James', year: 1983, duration: '1h34 min', directorId: 5, synopsis: 'Tulsa, Oklahoma. Petite frappe locale, Rusty James rêve d’égaler les exploits de son grand frère, le Motorcycle Boy, légendaire chef de bande qui a choisi de s’éclipser. En son absence, pour être à la hauteur de sa réputation...' },
    { id: 7, title: 'Apocalypse Now', year: 1979, duration: '2h27 min', directorId: 5, synopsis: 'Cloîtré dans une chambre d\'hôtel de Saïgon, le jeune capitaine Willard, mal rasé et imbibé d\'alcool, est sorti de sa prostration par une convocation de l\'état-major américain. Le général Corman lui confie une mission...' },
    { id: 8, title: 'Usual Suspects', year: 1995, duration: '1h46 min', directorId: 6, synopsis: 'En pleine nuit, une explosion ravage un cargo amarré dans le port de Los Angeles. Deux hommes ont échappé à la mort : un matelot hongrois et "Verbal" Kint, un petit escroc infirme. Interrogé par l’agent des douanes...' },
    { id: 9, title: 'Terminator', year: 1984, duration: '1h47 min', directorId: 7, synopsis: 'Un Terminator, robot d\'aspect humain, est envoyé d\'un futur où sa race livre aux hommes une guerre sans merci. Sa mission est de trouver et d\'éliminer Sarah Connor avant qu\'elle ne donne naissance à John...' },
    { id: 10, title: 'Million Dollar Baby', year: 2004, duration: '2h12 min', directorId: 8, synopsis: 'Rejeté depuis longtemps par sa fille, l\'entraîneur Frankie Dunn s\'est replié sur lui-même et vit dans un désert affectif, en évitant toute relation qui pourrait accroître sa douleur et sa culpabilité...' }
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

  private initialTemperatures: Temperature[] = [
    { id: 1, day: 0, month: 'Janvier', year: 2023, value: 6.5, city: 'Paris' },
    { id: 2, day: 0, month: 'Février', year: 2023, value: 7.5, city: 'Paris' },
    { id: 3, day: 0, month: 'Mars', year: 2023, value: 10.0, city: 'Paris' },
    { id: 4, day: 0, month: 'Avril', year: 2023, value: 11.5, city: 'Paris' },
    { id: 5, day: 0, month: 'Mai', year: 2023, value: 16.1, city: 'Paris' },
    { id: 6, day: 0, month: 'Juin', year: 2023, value: 22.4, city: 'Paris' },
    { id: 7, day: 0, month: 'Juillet', year: 2023, value: 21.2, city: 'Paris' },
    { id: 8, day: 0, month: 'Août', year: 2023, value: 20.9, city: 'Paris' },
    { id: 9, day: 0, month: 'Septembre', year: 2023, value: 21.4, city: 'Paris' },
    { id: 10, day: 0, month: 'Octobre', year: 2023, value: 15.6, city: 'Paris' },
    { id: 11, day: 0, month: 'Novembre', year: 2023, value: 9.8, city: 'Paris' },
    { id: 12, day: 0, month: 'Décembre', year: 2023, value: 8.1, city: 'Paris' },
  ];

  private initialArticles: Article[] = [
    { id: 1, name: 'Bermuda', color: 'Bleu',  unitPrice: 35.00, totalPrice: 0, description: 'Bermuda uni avec ceinture', quantity: 0 },
    { id: 2, name: 'Ceinture', color: 'Marron', unitPrice: 18.00, totalPrice: 0, description: 'Ceinture réversible à boucle', quantity: 0 },
    { id: 3, name: 'Maillot de bain', color: 'Rouge', unitPrice: 14.00, totalPrice: 0, description: 'Maillot de bain uni', quantity: 0 },
    { id: 4, name: 'Lunettes de soleil', color: 'Bois', unitPrice: 11.00, totalPrice: 0, description: 'Lunettes de soleil effet bois', quantity: 0 },
    { id: 5, name: 'Chaussettes', color: 'Noire', unitPrice: 5.00, totalPrice: 0, description: 'Chaussettes basses', quantity: 0 },
    { id: 6, name: 'Baskets', color: 'Blanc', unitPrice: 46.00, totalPrice: 0, description: 'Baskets basses en toile', quantity: 0 },
    { id: 7, name: 'Polo', color: 'Beu clair', unitPrice: 25.00, totalPrice: 0, description: 'Polo manches courtes', quantity: 0 },
    { id: 8, name: 'Chemise', color: 'rouge', unitPrice: 23.00, totalPrice: 0, description: 'Chemise manches courtes en lin', quantity: 0 }
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
          case 'temperatures':
              this.db.temperatures = [...this.initialTemperatures];
              break;
          case 'articles':
              this.db.articles = [...this.initialArticles];
              break;
          default:
            this.resetDb();
            break;
        }
      }

      return this.db;
      //return { authors, books, movies, directors, temperatures, articles };
  }


   resetDb() {
    this.db = {
      authors: [...this.initialAuthors],
      books: [...this.initialBooks],
      movies: [...this.initialMovies],
      directors: [...this.initialDirectors],
      temperatures: [...this.initialTemperatures],
      articles: [...this.initialArticles]
    };
   }
}
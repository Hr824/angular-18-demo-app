import { computed, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';
import { AppSettings } from '../app.custom.settings';
import { Token } from '../models/token';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //###################################
  //Authentication with BehaviorSubject
  //###################################
  // private isAuth = new BehaviorSubject<boolean>(false);
  // isAuth$ = this.isAuth.asObservable();
  // setIsAuth(value: boolean) {
  //   this.isAuth.next(value);
  // }

  //###################################
  //Authentication with Signals
  //###################################
  private isLogged$$ = signal(false);
  isLogged = computed(() => this.isLogged$$());
  setIsLogged(value: boolean) {
     this.isLogged$$.update(() => value);
  }

  //User = { uid: '', firstName: '', lastName: '', role: '', exp: 0 }
  private user$$ = signal<User|null>(null);
  user = computed(() => this.user$$());
  setUser(value: User|null) {
    this.user$$.update(() => value);
  }


  constructor(private router: Router, private tokenService: TokenService, private httpClient: HttpClient) {}

  // Méthode pour se connecter et stocker le token JWT dans le localStorage
  login(username: string, password: string): boolean {

    if (username === 'user1' && password === 'pass1') {

      let tokens: Observable<Token[]> = this.httpClient.get<Token[]>(AppSettings.API_END_POINTS.TOKENS);

      tokens.subscribe({
        next: result => {
          //Mock JWT token récupéré après l'appel de l'API côté backend
          this.tokenService.setTokenInLocalStorage(AppSettings.AUTH_TOKEN_KEY, result[0].value);

          let currentUser: User|null = this.tokenService.getDecodedToken<User>(result[0].value);
          //let currentUser: User|null = { uid: '123456', firstName: 'Paul', lastName: 'Martin', role: '1', exp: 2042747113 }

          this.setIsLogged(true);
          this.setUser(currentUser);
        },
        complete: () => this.router.navigate(['/admin/dashboard'])
      });


      //###################################
      //Authentication with BehaviorSubject
      //###################################
      //this.setIsAuth(true);

      return true;

    } else {
      this.tokenService.removeTokenInLocalStorage(AppSettings.AUTH_TOKEN_KEY);
      this.setIsLogged(false);
      this.setUser(null);
      
      return false;
    }
  }


  // Méthode pour se déconnecter et supprimer le token JWT du localStorage
  logout(): void {
    this.tokenService.removeTokenInLocalStorage(AppSettings.AUTH_TOKEN_KEY);

    //###################################
    //Authentication with BehaviorSubject
    //###################################
    // this.setIsAuth(false);

    //###################################
    //Authentication with Signals
    //###################################
    this.setIsLogged(false);
    this.setUser(null);

    this.router.navigate(['/logout']);
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    const currentUser = this.tokenService.getDecodedTokenInLocalStorage<User>(AppSettings.AUTH_TOKEN_KEY);

    //###################################
    //Authentication with BehaviorSubject
    //###################################
    // this.setIsAuth(token === null ? false : true);

    //###################################
    //Authentication with Signals
    //###################################
    this.setIsLogged(currentUser === null ? false : true);
    this.setUser(currentUser === null ? null : currentUser);

    return currentUser === null ? false : true;
  }
}
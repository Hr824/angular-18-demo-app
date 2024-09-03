import { computed, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { AppSettings } from '../app.custom.settings';

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

  private username$$ = signal('');
  username = computed(() => this.username$$());
  setUsername(value: string) {
     this.username$$.update(() => value);
  }

  constructor(private router: Router, private tokenService: TokenService) {}

  // Méthode pour se connecter et stocker le token JWT dans le localStorage
  login(username: string, password: string): boolean {

    if (username === 'user1' && password === 'pass1') {

      //Mock JWT token récupéré après l'appel de l'API côté backend
      const authTokenValue = username;
      this.tokenService.setToken(AppSettings.AUTH_TOKEN_KEY, authTokenValue);

      //###################################
      //Authentication with BehaviorSubject
      //###################################
      //this.setIsAuth(true);

      //###################################
      //Authentication with Signals
      //###################################
      this.setIsLogged(true);
      this.setUsername(username);

      return true;
    } else {
      this.tokenService.removeToken(AppSettings.AUTH_TOKEN_KEY);
      this.setIsLogged(false);
      this.setUsername('');
      
      return false;
    }
  }


  // Méthode pour se déconnecter et supprimer le token JWT du localStorage
  logout(): void {
    this.tokenService.removeToken(AppSettings.AUTH_TOKEN_KEY);

    //###################################
    //Authentication with BehaviorSubject
    //###################################
    // this.setIsAuth(false);

    //###################################
    //Authentication with Signals
    //###################################
    this.setIsLogged(false);
    this.setUsername('');

    this.router.navigate(['/logout']);
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    const token = this.tokenService.getToken(AppSettings.AUTH_TOKEN_KEY);
    
    //###################################
    //Authentication with BehaviorSubject
    //###################################
    // this.setIsAuth(token === null ? false : true);

    //###################################
    //Authentication with Signals
    //###################################
    this.setIsLogged(token === null ? false : true);
    this.setUsername(token === null ? '' : token);
    
    return token === null ? false : true;
  }
}
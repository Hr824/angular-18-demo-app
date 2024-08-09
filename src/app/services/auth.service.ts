import { computed, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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

  private readonly tokenKey = 'authToken';

  constructor(private router: Router) {}

  // Méthode pour se connecter et stocker le token JWT dans le localStorage
  login(username: string, password: string): boolean {

    if (username === 'user1' && password === 'pass1') {

      //Mock JWT token récupéré après l'appel de l'API côté backend
      const token = username;
      localStorage.setItem(this.tokenKey, token);

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
      localStorage.removeItem(this.tokenKey);
      this.setIsLogged(false);
      this.setUsername('');
      
      return false;
    }
  }


  // Méthode pour se déconnecter et supprimer le token JWT du localStorage
  logout(): void {
    localStorage.removeItem(this.tokenKey);

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
    const token = localStorage.getItem(this.tokenKey);
    
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

  // Méthode pour obtenir le token JWT dans le localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
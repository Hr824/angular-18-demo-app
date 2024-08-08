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

  private readonly tokenKey = 'authToken';

  constructor(private router: Router) {}

  // Méthode pour se connecter et stocker le token JWT dans le localStorage
  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);

    //###################################
    //Authentication with BehaviorSubject
    //###################################
    //this.setIsAuth(true);

    //###################################
    //Authentication with Signals
    //###################################
    this.setIsLogged(true);
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
    
    //return !!token;
    return token === null ? false : true;
  }

  // Méthode pour obtenir le token JWT dans le localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getTokenInLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  setTokenInLocalStorage(key: string, token: string){
    localStorage.setItem(key, token);
  }

  removeTokenInLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  removeTokensInLocalStorage(keys: string[]): void {
    keys.forEach((key) => this.removeTokenInLocalStorage(key));
  }


  getDecodedTokenInLocalStorage<T>(key: string) {

    //Pour l'erreur InvalidTokenError après le déploiement de l'app
    //si on a changé le format du token
    try{
      const tokenValue = this.getTokenInLocalStorage(key);
      if(tokenValue){
        return jwtDecode<T>(tokenValue);
      }
      else{
        return null;
      }
    }
    catch(e: unknown){
      this.removeTokenInLocalStorage(key);
      return null;
    }
  }

  getDecodedToken<T>(tokenValue: string) {
    try{
      if(tokenValue){
        return jwtDecode<T>(tokenValue);
      }
      else{
        return null;
      }
    }
    catch(e: unknown){
      return null;
    }
  }

  isTokenExpired(key: string): boolean {
    const expiryTime: number | undefined = this.getDecodedTokenInLocalStorage<JwtPayload>(key)?.exp;
    //console.log('expiryTime',expiryTime);
    
    if (expiryTime) {
      // console.log('(1000 * expiryTime)',(1000 * expiryTime));
      // console.log('(new Date()).getTime()',(new Date()).getTime());
      // console.log('(diff',(1000 * expiryTime) - (new Date()).getTime());

      return ((1000 * expiryTime) - (new Date()).getTime()) < 0;
    } else {
      //console.log('(diff2', expiryTime);
      return true;
    }
  }
}

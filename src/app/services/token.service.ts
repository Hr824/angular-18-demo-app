import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  setToken(key: string, token: string){
    localStorage.setItem(key, token);
  }

  removeToken(key: string): void {
    localStorage.removeItem(key);
  }

  removeTokens(keys: string[]): void {
    keys.forEach((key) => this.removeToken(key));
  }


  getDecodedToken<T>(key: string) {
    const tokenValue = this.getToken(key);
    if(tokenValue){
      return jwtDecode<T>(tokenValue);
    }

    return null;
  }

  isTokenExpired(key: string): boolean {
    const expiryTime: number | undefined = this.getDecodedToken<JwtPayload>(key)?.exp;
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

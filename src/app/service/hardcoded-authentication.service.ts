import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    //console.log('Before ' + this.isUserLoggedIn());
    if (username === 'jamalmaster' && password === 'admin') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('After ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
}

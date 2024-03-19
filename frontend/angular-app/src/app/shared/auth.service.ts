import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  loggedUser: string = 'asd';

  constructor() {}

  logIn(): void {
    this.loggedUser = <string>sessionStorage.getItem('userName');
    this.isLoggedIn = true;
  }

  logOut(): void {
    sessionStorage.clear();
    this.isLoggedIn = false;
  }
}

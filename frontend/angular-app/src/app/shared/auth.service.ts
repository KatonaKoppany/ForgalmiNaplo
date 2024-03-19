import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() {}

  logIn(): void {
    this.isLoggedIn = true;
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
}

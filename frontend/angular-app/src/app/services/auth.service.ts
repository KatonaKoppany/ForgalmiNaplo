import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    if (typeof sessionStorage !== 'undefined') {
      if (sessionStorage.getItem('isLoggedIn') === 'true') {
        return true;
      }
    }
    return false;
  }

  logIn(): void {
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  logOut(): void {
    sessionStorage.clear();
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(public authService: AuthService) {}

  logOut() {
    //sessionStorage ürítése + logIn ablakra navigálás
    this.authService.logOut();
  }
}

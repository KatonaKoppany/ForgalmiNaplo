import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private dataService: DataService) {}
  loginFormData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });
  email = new FormControl('', [Validators.required, Validators.email]);

  onSubmit() {
    console.log(this.loginFormData);
  }

  getErrorMessage() {
    const emailControl = this.loginFormData.get('email');
    if (emailControl) {
      if (emailControl.hasError('required')) {
        return 'Hiányos email!';
      }
      return emailControl.hasError('email') ? '' : '';
    }
    return '';
  }
  hide = true;
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import * as CryptoJS from 'crypto-js';
import { AlertService } from '../../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private dataService: DataService,
    private alertService: AlertService
  ) {}
  loginFormData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  email = new FormControl('', [Validators.required, Validators.email]);
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
  alert = true;

  onSubmit() {
    const email = <string>this.loginFormData.get('email')?.value;
    const password = this.loginFormData.get('password')?.value;
    const hashedPassword = CryptoJS.SHA1(<string>password).toString();

    console.log(hashedPassword);
    this.dataService
      .loginCheck('admin', email, hashedPassword)
      .subscribe((res) => {
        if (res.length > 0) {
          console.log(res);
        } else {
          this.alertService.alert('Hibás adatok!', 'warning', 'warning');
          this.alert = true;
        }
      });
  }
}

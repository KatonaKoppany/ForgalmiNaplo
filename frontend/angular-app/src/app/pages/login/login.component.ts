import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { AuthService } from '../../shared/auth.service';
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
    private alertService: AlertService,
    private authService: AuthService
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

    this.dataService
      .loginCheck('admin', email, hashedPassword)
      .subscribe((res) => {
        if (res.length > 0) {
          sessionStorage.setItem('userName', res[0].userName);
          sessionStorage.setItem('phoneNum', res[0].phoneNum);
          sessionStorage.setItem('userEmail', res[0].email);
          sessionStorage.setItem('permission', res[0].permission);
          sessionStorage.setItem('schoolID', res[0].schoolID);

          this.alertService.alert('Üdvözöljük!', 'success', 'check_circle');
          this.authService.logIn();
        } else {
          this.dataService
            .loginCheck('teacher', email, hashedPassword)
            .subscribe((res) => {
              if (res.length > 0) {
                sessionStorage.setItem('userName', res[0].userName);
                sessionStorage.setItem('phoneNum', res[0].phoneNum);
                sessionStorage.setItem('userEmail', res[0].email);
                sessionStorage.setItem('permission', res[0].permission);
                sessionStorage.setItem('schoolID', res[0].schoolID);

                this.alertService.alert(
                  'Üdvözöljük!',
                  'success',
                  'check_circle'
                );
                this.authService.logIn();
              } else {
                this.dataService
                  .loginCheck('student', email, hashedPassword)
                  .subscribe((res) => {
                    if (res.length > 0) {
                      sessionStorage.setItem('userName', res[0].userName);
                      sessionStorage.setItem('phoneNum', res[0].phoneNum);
                      sessionStorage.setItem('userEmail', res[0].email);
                      sessionStorage.setItem('permission', res[0].permission);
                      sessionStorage.setItem('teacherID', res[0].teacherID);

                      this.alertService.alert(
                        'Üdvözöljük!',
                        'success',
                        'check_circle'
                      );
                      this.authService.logIn();
                    } else {
                      this.alertService.alert(
                        'Hibás adatok!',
                        'danger',
                        'warning'
                      );
                      this.alert = true;
                    }
                  });
              }
            });
        }
      });
  }
}

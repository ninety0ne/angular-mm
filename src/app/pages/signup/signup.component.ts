import { Component, OnInit, Injectable } from '@angular/core';
import { AuthHandlerComponent } from '../../auth/auth-handler/auth-handler.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  passwordCheck: string = '';

  constructor(private auth: AuthHandlerComponent) {}

  ngOnInit(): void {}

  SignUp() {
    if (!this.email) {
      alert('Please enter your E-Mail');
      return;
    }
    if (!this.password) {
      alert('Please enter your password');
      return;
    }
    if (!this.passwordCheck) {
      alert('Please re-enter your password');
      return;
    }

    if (this.password !== this.passwordCheck) {
      alert("Passwords don't match");
      return;
    }

    this.auth.SignUp(this.email, this.password);
  }
}

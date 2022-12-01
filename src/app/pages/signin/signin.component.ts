import { Component, OnInit } from '@angular/core';
import { AuthHandlerComponent } from '../../auth/auth-handler/auth-handler.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthHandlerComponent) {}
  ngOnInit(): void {}

  SignIn() {
    if (!this.email) {
      alert('Please enter your E-Mail');
      return;
    }
    if (!this.password) {
      alert('Please enter your password');
      return;
    }

    this.auth.SignIn(this.email, this.password);
  }
}

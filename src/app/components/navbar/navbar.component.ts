import { Component } from '@angular/core';
import { AuthHandlerComponent } from '../../auth/auth-handler/auth-handler.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private auth: AuthHandlerComponent) {}

  UserSignedIn() {
    return localStorage.getItem('token');
  }

  SignOut() {
    this.auth.SignOut();
  }
}

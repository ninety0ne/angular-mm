import { Component, OnInit } from '@angular/core';
import { AuthHandlerComponent } from '../../auth/auth-handler/auth-handler.component';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(private auth: AuthHandlerComponent) {}

  ngOnInit(): void {}

  SignOut() {
    this.auth.SignOut();
  }
}

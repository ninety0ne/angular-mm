import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-auth-handler',
  templateUrl: './auth-handler.component.html',
  styleUrls: ['./auth-handler.component.css'],
})
export class AuthHandlerComponent implements OnInit {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  SignUp(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('User was created');
        this.router.navigate(['/signin']);
      },
      (error) => {
        alert(error);
      }
    );
  }

  SignIn(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert(error);
        this.router.navigate(['/']);
      }
    );
  }

  SignOut() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UserSignedIn(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/signin']);
      return false;
    } else {
      return true;
    }
  }
}

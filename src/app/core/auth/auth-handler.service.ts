import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthHandlerService {
  private apiUrl = 'https://192.168.169.60/';

  constructor(private httpClient: HttpClient, private router: Router) {}

  SignIn(signInData: Object) {
    this.httpClient
      .post(this.apiUrl + 'Login?UserNameOrEmail=true', signInData)
      .subscribe((token) => {
        localStorage.setItem('jwt', this.ParseToken(token));
        this.router.navigate(['/dashboard']);
      });
  }

  SignUp(signUpData: Object) {
    this.httpClient
      .post(this.apiUrl + 'RegisterUser', signUpData)
      .subscribe((token) => {
        localStorage.setItem('jwt', this.ParseToken(token));
        this.router.navigate(['/']);
      });
  }

  ParseToken(token: Object): string {
    var tokenObject = JSON.parse(JSON.stringify(token));
    return tokenObject.Token;
  }

  SignOut() {
    this.router.navigate(['/']);
    this.httpClient.get(this.apiUrl + 'Logout', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        'Content-Type': 'application/json',
      }),
    });

    localStorage.removeItem('jwt');
    if (!localStorage.getItem('jwt')) {
      this.router.navigate(['/']);
    } else return;
  }

  SendUserScore(userScore: object) {
    this.httpClient
      .post(this.apiUrl + 'UpdateUserScore', userScore, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
      })
      .subscribe(() => {});
  }

  UserSignedIn(): boolean {
    if (!localStorage.getItem('jwt')) {
      this.router.navigate(['/signin']);
      return false;
    } else {
      return true;
    }
  }
}

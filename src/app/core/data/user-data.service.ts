import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private apiUrl = 'https://192.168.169.60/';

  constructor(private httpClient: HttpClient) {}

  GetUserData(): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + 'UserData', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/core/data/user-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  public userToken: string;

  public userName: string;
  public userEmail: string;
  public userScore: number;
  public userRole: boolean;

  constructor(private userData: UserDataService) {}

  ngOnInit(): void {
    this.userToken = JSON.stringify(localStorage.getItem('jwt'));
    this.userData.GetUserData().subscribe((userData) => {
      this.userName = userData.UserName;
      this.userEmail = userData.Email;
      this.userScore = userData.Score;
      this.userRole = userData.Admin;
    });
  }
}

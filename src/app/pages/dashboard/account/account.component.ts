import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/core/data/user-data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  public userToken: string;
  public userObserver: Observable<User>;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userToken = JSON.stringify(localStorage.getItem('jwt'));
    /*this.userObserver = this.userDataService.GetUserData();*/
  }
}

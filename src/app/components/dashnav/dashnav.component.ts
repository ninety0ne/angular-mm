import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  faGauge,
  faHouse,
  faSeedling,
  faChartLine,
  faBell,
  faLightbulb,
  faGear,
  faUserGear,
  faDroplet,
  faPlantWilt,
  faFaucetDrip,
  faDoorOpen,
  faChevronUp,
  faBurst,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AuthHandlerService } from 'src/app/core/auth/auth-handler.service';
import { UserDataService } from 'src/app/core/data/user-data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.css'],
})
export class DashnavComponent implements OnInit {
  public userName: string;
  public userObserver: Observable<User>;

  constructor(
    private authService: AuthHandlerService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.userObserver = this.userDataService.GetUserData();
  }

  SignOut() {
    this.authService.SignOut();
  }

  faDashboard = faGauge;
  faHouse = faHouse;
  faSeedling = faSeedling;
  faChartLine = faChartLine;
  faBell = faBell;
  faLightbulb = faLightbulb;
  faGear = faGear;
  faUserGear = faUserGear;
  faDroplet = faDroplet;
  faPlantWilt = faPlantWilt;
  faFaucetDrip = faFaucetDrip;
  faDoorOpen = faDoorOpen;
  faChevron = faChevronUp;
  faBurst = faBurst;
}

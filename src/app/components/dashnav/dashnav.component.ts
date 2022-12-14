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
} from '@fortawesome/free-solid-svg-icons';
import { AuthHandlerService } from 'src/app/core/auth/auth-handler.service';
import { UserDataService } from 'src/app/core/data/user-data.service';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.css'],
})
export class DashnavComponent implements OnInit {
  public userName: string;

  constructor(
    private authService: AuthHandlerService,
    private userData: UserDataService
  ) {}

  ngOnInit(): void {
    this.userData.GetUserData().subscribe((userData) => {
      this.userName = userData.UserName;
    });
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
}

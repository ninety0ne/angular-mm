import { Component, OnInit } from '@angular/core';
import { AuthHandlerComponent } from 'src/app/auth/auth-handler/auth-handler.component';

import {
  faGauge,
  faSeedling,
  faChartLine,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.css'],
})
export class DashnavComponent implements OnInit {
  constructor(private auth: AuthHandlerComponent) {}

  ngOnInit(): void {}

  SignOut() {
    this.auth.SignOut();
  }

  faDashboard = faGauge;
  faSeedling = faSeedling;
  faChartLine = faChartLine;
  faBell = faBell;
}

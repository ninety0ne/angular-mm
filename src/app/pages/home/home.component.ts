import { Component, OnInit } from '@angular/core';
import { AuthHandlerComponent } from 'src/app/auth/auth-handler/auth-handler.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthHandlerComponent, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.UserSignedIn()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}

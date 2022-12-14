import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHandlerService } from 'src/app/core/auth/auth-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.UserSignedIn()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}

import { Component, OnInit } from '@angular/core';

import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGoogle = faGoogle;
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  public parentRoute: string = '';
  public childRoute: string = '';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    var urlContent: string[] = this.router.url.split('/');

    this.parentRoute =
      urlContent[1].charAt(0).toUpperCase() +
      urlContent[1].slice(1).toLowerCase();

    if (urlContent[2]) {
      this.childRoute =
        urlContent[2].charAt(0).toUpperCase() +
        urlContent[2].slice(1).toLowerCase();
    }
  }
}

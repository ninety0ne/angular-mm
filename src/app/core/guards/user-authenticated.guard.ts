import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthHandlerComponent } from 'src/app/auth/auth-handler/auth-handler.component';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticatedGuard implements CanActivate {
  constructor(private guardAuth: AuthHandlerComponent) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.guardAuth.UserSignedIn();
  }
}

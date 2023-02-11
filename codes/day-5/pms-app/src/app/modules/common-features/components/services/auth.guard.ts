import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_SERVICE_TOKEN } from 'src/app/constants/constants';
import { IAuthService } from '../../../core/models/auth-service.contract';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
    private authSvc: IAuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.authSvc.getToken()
    if (token !== '') {
      return true;
    } else {
      //this line has been added to redirect the user to the login view along with the originally requested URL appeneded using query string (such as: http://localhost:4200/login?returnUrl=products)
      //RouterStateSnapshot provides you which URL was originally requested (use 'url' property of that object)
      //navigate() method accepts an object as 2nd argument, where you can use the queryParams property to attach the originally requested URL
      this.router.navigate(
        ['/login'],
        {
          queryParams: {
            returnUrl: state.url
          }
        }
      )
      return false;
    }
  }
}

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

constructor (private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if (this.authService.isAuth()) {
           return true;
       } else {
            this.router.navigate(['/courselist', {outlets: {'left': ['timetable'], 'right': ['welcome']}}]);
        }
    }
}

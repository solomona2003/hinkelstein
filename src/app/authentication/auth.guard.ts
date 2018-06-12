import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
    CanActivate, ActivatedRouteSnapshot,
    RouterState, RouterStateSnapshot, Router
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    /**
       * Constructor defines all necessary injections.
       * @param {AuthService} authService Auth Service injectable
       * @param {Router} router router
       */
    constructor(private authService: AuthService, private router: Router) { }

    /**
       * Method used to determine when to return a boolean true or false depending on isAuth() from the auth service
       * @param {ActivatedRouteSnapshot} route
       * @param {RouterStateSnapshot} state
       */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/home']);
        }
    }
}


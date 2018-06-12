import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UIService } from './../shared/ui-features.service';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();
    private isAuthenticated = false;
    state: User = {
        id: '1', email: 'solomon',
        role: 'teacher', agreedCoursesId: ['1']
    };

    constructor(private uIService: UIService, private router: Router) { }


    /**
     * Method used to login user
     * @param {AuthData} authData
     */
    public login(authData: AuthData) {
        this.uIService.loadingStateChanged.next(true);

    }

    /**
     * Method used to login out user
     */
    public login1() {
        this.isAuthenticated = true;
        this.authSuccesfully();

    }

    /**
     * Method used to logout out user
     */
    public logout() {
        this.authChange.next(false);
        this.isAuthenticated = false;
        this.router.navigate(['/home']);

    }

    /**
     * Method used to check if user is still authenticated
     */
    public isAuth() {
        return this.isAuthenticated;  // return false if the user is not signed in
    }


    /**
     * Method used change the authChange subscription
     * to true and to indicated that the user is authenticated
     */
    private authSuccesfully() {
        this.authChange.next(true);
        this.isAuthenticated = true;
        // this.router.navigate(['/courselist']);
    }

}

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
    private isAuthenticated = true;

    constructor(private uIService: UIService, private router: Router) { }

    // registerUser(authData: AuthData) {
    //     this.user = {
    //         email: Math.round(Math.random() * 10000).toString(),
    //         userid: Math.round(Math.random() * 10000).toString(),
    //         role: Math.round(Math.random() * 10000).toString(),
    //         avatar: Math.round(Math.random() * 10000).toString()
    //     };
    // }

    login(authData: AuthData) {
        this.uIService.loadingStateChanged.next(true);

        //   this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
        //     result => {
        //         this.uIService.loadingStateChanged.next(false);
        //         this.authSuccesfully();
        //     }
        // ).catch(error => {
        //     this.errorMessage.next(error);
        //     console.log('errer login' + error);
        //     this.uIService.loadingStateChanged.next(false);

        // });

    }

    logout() {
        this.authChange.next(false);
        this.isAuthenticated = false;
        this.router.navigate(['/courselist',
            { outlets: { 'left': ['timetable'], 'right': ['welcome'] } }]);

    }

    isAuth() {
        return this.isAuthenticated;  // return false if the user is not signed in
    }

    private authSuccesfully() {
        this.authChange.next(true);
        this.isAuthenticated = true;
        this.router.navigate(['/courselist',
            { outlets: { 'left': ['mycourse'], 'right': ['coursedetail'] } }]);
    }

}

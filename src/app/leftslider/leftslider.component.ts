import { Observable, Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../authentication/auth.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatSidenavContainer, MatSidenav, MatNavList, MatIcon } from '@angular/material';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-leftslider',
  templateUrl: './leftslider.component.html',
  styleUrls: ['./leftslider.component.css']
})
export class LeftsliderComponent implements OnInit, OnDestroy {

  private user: Observable<firebase.User>;

  isAuth = false;
  killAuthSubscription: Subscription;
  constructor (private authService: AuthService, private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  ngOnInit() {
    this.killAuthSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth =  authStatus;
    });
  }

  ngOnDestroy(): void {
    this.killAuthSubscription.unsubscribe();
  }

  signInWithGoogle() {
    this.authService.googleLogin();
  }

  signInWithFacebook() {
    this.authService.facebookLogin();
  }


}



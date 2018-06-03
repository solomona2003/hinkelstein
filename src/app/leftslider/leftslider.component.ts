import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { LeftsliderService } from './leftslider.service';
import { AuthService } from './../authentication/auth.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatSidenavContainer, MatSidenav, MatNavList, MatIcon } from '@angular/material';

@Component({
  selector: 'app-leftslider',
  templateUrl: './leftslider.component.html',
  styleUrls: ['./leftslider.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LeftsliderComponent implements OnInit, OnDestroy {

  darkState: boolean;
  lightState: boolean;
  middleState: boolean;
  toolBarColor: string;

  // darktheme = false;
  // lighttheme = false;
  // middletheme = false;

  // killdark: Subscription;
  // killlight: Subscription;
  // killmiddle: Subscription;

  constructor (public overlayContainer: OverlayContainer, private authService: AuthService, private leftsliderService: LeftsliderService) {
    this.leftsliderService.themeStateDark.subscribe(r => this.darkState = r);
    this.leftsliderService.themeStateMiddle.subscribe(r => this.middleState = r);
    this.leftsliderService.themeStateLight.subscribe(r => this.lightState = r);

    if (!this.lightState && !this.darkState && !this.middleState) {
      this.toolBarColor = 'basic';
    } else { this.toolBarColor = 'primary'; }


    // this.killdark = this.leftsliderService.themeStateDark.subscribe(r => { this.darktheme = r; });
    //   this.killlight = this.leftsliderService.themeStateLight.subscribe(r => { this.lighttheme = r; });
    //   this.killmiddle = this.leftsliderService.themeStateMiddle.subscribe(r => { this.middletheme = r; });

    //   if (this.darktheme === true || this.darktheme === undefined) {
    //     console.log('am in dark', this.darktheme);

    //     this.overlayContainer.getContainerElement().classList.add('dark');
    //   } else if (this.lighttheme === true ) {
    //     console.log('am in light', this.lighttheme);
    //     this.overlayContainer.getContainerElement().classList.add('light');
    //   } else if (this.middletheme === true) {
    //     console.log('am in middle', this.middletheme);
    //     this.overlayContainer.getContainerElement().classList.add('middle');
    //   }
  }
  ngOnInit() {
  }

  changeToLight() {
    this.leftsliderService.themeStateLight.next(true);
    this.leftsliderService.themeStateDark.next(false);
    this.leftsliderService.themeStateMiddle.next(false);
  }


  changeToDark() {
    this.leftsliderService.themeStateLight.next(false);
    this.leftsliderService.themeStateMiddle.next(false);
    this.leftsliderService.themeStateDark.next(true);
  }

  changeToMiddle() {
    this.leftsliderService.themeStateLight.next(false);
    this.leftsliderService.themeStateDark.next(false);
    this.leftsliderService.themeStateMiddle.next(true);
  }


  login() {
    this.authService.login1();
  }

  logout() {
    this.authService.logout();
  }

   ngOnDestroy () {
    // this.killdark.unsubscribe();
    // this.killlight.unsubscribe();
    // this.killmiddle.unsubscribe();
  }


}



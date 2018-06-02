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
export class LeftsliderComponent implements OnInit {

  darkState: boolean;
  lightState: boolean;
  middleState: boolean;
  toolBarColor: string;

  constructor (private authService: AuthService, private leftsliderService: LeftsliderService) {
    this.leftsliderService.themeStateDark.subscribe(r => this.darkState = r);
    this.leftsliderService.themeStateMiddle.subscribe(r => this.middleState = r);
    this.leftsliderService.themeStateLight.subscribe(r => this.lightState = r);

    if (!this.lightState && !this.darkState && !this.middleState) {
      this.toolBarColor = 'basic';
    } else { this.toolBarColor = 'primary'; }
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


}



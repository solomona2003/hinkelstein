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

  constructor (private authService: AuthService, private leftsliderService: LeftsliderService) {}
  ngOnInit() {
  }

  changeToLight() {
    this.leftsliderService.themeStateLight.next(true);
    this.leftsliderService.themeStateDark.next(false);
  }


  changeToDark() {
    this.leftsliderService.themeStateLight.next(false);
    this.leftsliderService.themeStateDark.next(true);
  }


  login() {
    this.authService.login1();
  }

  logout() {
    this.authService.logout();
  }


}



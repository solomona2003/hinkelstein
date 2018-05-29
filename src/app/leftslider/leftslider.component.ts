import { AuthService } from './../authentication/auth.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatSidenavContainer, MatSidenav, MatNavList, MatIcon } from '@angular/material';

@Component({
  selector: 'app-leftslider',
  templateUrl: './leftslider.component.html',
  styleUrls: ['./leftslider.component.css']
})
export class LeftsliderComponent implements OnInit {

  constructor (private authService: AuthService) {}
  ngOnInit() {
  }


  login() {
    this.authService.login1();
  }

  logout() {
    this.authService.logout();
  }


}



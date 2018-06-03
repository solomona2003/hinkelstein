import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { LeftsliderService } from './leftslider/leftslider.service';
import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  lightPossible: boolean;
  darkPossible: boolean;
  middlePossible: boolean;
constructor ( private leftsliderService: LeftsliderService) {}

killl: Subscription;
killd: Subscription;
killm: Subscription;


ngOnInit  () {
  this.killl = this.leftsliderService.themeStateLight.subscribe(r => {this.lightPossible = r; } );
  this.killd = this.leftsliderService.themeStateDark.subscribe(r => {this.darkPossible = r; } );
  this.killm = this.leftsliderService.themeStateMiddle.subscribe(r => {this.middlePossible = r; } );
}


ngOnDestroy(){
  this.killd.unsubscribe();
  this.killl.unsubscribe();
  this.killm.unsubscribe();
}
}

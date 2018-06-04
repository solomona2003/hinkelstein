import { Router, RouterEvent, NavigationCancel, NavigationError, NavigationEnd, NavigationStart } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { LeftsliderService } from './leftslider/leftslider.service';
import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

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
constructor ( private leftsliderService: LeftsliderService, private router: Router, public ngProgress: NgProgress ) {
  router.events.subscribe((event: RouterEvent) => {
    this.navigationInterceptor(event)
  })
}

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




/**
  * Method shows and hides the loading spinner during RouterEvent changes
  * @param {RouterEvent} event
  */
 navigationInterceptor(event: RouterEvent): void {
  if (event instanceof NavigationStart) {
    this.startLoading();
  }
  if (event instanceof NavigationEnd) {
    this.completeLoading();
  }

  // Set loading state to false in both of the below events to hide the spinner in case a request fails
  if (event instanceof NavigationCancel) {
    this.completeLoading();
  }
  if (event instanceof NavigationError) {
    this.completeLoading();
  }
}

/**
  * Method starts slim loading bar
  */
startLoading() {
  this.ngProgress.start();
}


/**
  * Method stops slim loading bar
  */
stopLoading() {
  this.ngProgress.done();
}

/**
* Method completes slim loading bar
*/
completeLoading() {
  this.ngProgress.done();
}
}

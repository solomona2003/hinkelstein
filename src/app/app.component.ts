import { LeftsliderService } from './leftslider/leftslider.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';
  lightPossible: boolean;
  darkPossible: boolean;
constructor (private leftsliderService: LeftsliderService) {}

ngDoCheck() {
  this.leftsliderService.themeStateLight.subscribe(r => {this.lightPossible = r; } );
  this.leftsliderService.themeStateDark.subscribe(r => {this.darkPossible = r; } );

}
}

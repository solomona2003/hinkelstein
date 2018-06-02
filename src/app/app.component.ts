import { LeftsliderService } from './leftslider/leftslider.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  lightPossible: boolean;
  darkPossible: boolean;
  middlePossible: boolean;
constructor (private leftsliderService: LeftsliderService) {}

ngOnInit  () {
  this.leftsliderService.themeStateLight.subscribe(r => {this.lightPossible = r; } );
  this.leftsliderService.themeStateDark.subscribe(r => {this.darkPossible = r; } );
  this.leftsliderService.themeStateMiddle.subscribe(r => {this.middlePossible = r; } );

}
}

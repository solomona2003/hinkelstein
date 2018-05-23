import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streamcontrol',
  templateUrl: './streamcontrol.component.html',
  styleUrls: ['./streamcontrol.component.css']
})
export class StreamcontrolComponent implements OnInit {

  singleStreamStateObj = 'ON';
  public isRecording = true;
  theColor: string;
  constructor() { }

  ngOnInit() {
  }

  onButtonPressed() {
  // if ( this.isRecording === true) {
    this.theColor = 'primary';
    console.log('in button pressed');
    
  // }
}

}

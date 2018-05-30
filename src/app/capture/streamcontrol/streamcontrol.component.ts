import { StreamingService } from './streaming.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streamcontrol',
  templateUrl: './streamcontrol.component.html',
  styleUrls: ['./streamcontrol.component.css']
})

export class StreamcontrolComponent implements OnInit {

  singleStreamStateObj = 'ON';
  public isRecording = true;

  webColor: string;
  recColor: string;
  r2rColor: string;
  playColor: string;
  stopColor: String;

  webButtonStatus = 'off';
  recButtonStatus = 'off';
  r2rButtonStatus = 'off';
  playButtonStatus = 'off';
  stopButtonStatus = 'off';

  pausOn = false;
  controlStatus = false;
  constructor(private streamingService: StreamingService) { }


  ngOnInit() {
    // this.streamingService.webButton.subscribe(r => { this.webButtonStatus = r; });
    // this.streamingService.recButton.subscribe(r => { this.recButtonStatus = r; });
    // this.streamingService.r2rButton.subscribe(r => { this.r2rButtonStatus = r; });
    // this.streamingService.playButton.subscribe(r => { this.playButtonStatus = r; });
    // this.streamingService.stopButton.subscribe(r => { this.stopButtonStatus = r; });

    this.streamingService.webButton.next(this.webButtonStatus);
    this.streamingService.recButton.next(this.recButtonStatus);
    this.streamingService.r2rButton.next(this.r2rButtonStatus);
    this.streamingService.playButton.next(this.playButtonStatus);
    this.streamingService.stopButton.next(this.stopButtonStatus);
  }


  onRecButtonPressed() {
    let playStatus;
    let recStatus;
    this.streamingService.playButton.subscribe(r => {playStatus = r; });
    this.streamingService.recButton.subscribe(r => {recStatus = r; });
   if ( playStatus === 'off') {
     this.controlStatus = true;
    this.r2rColor = 'primary';
    this.streamingService.recButton.next('standby');
   } else if (playStatus === 'on' && recStatus === 'standby') {
    this.controlStatus = true;
     this.streamingService.recButton.next('on');
     this.r2rColor = 'warn';
   }  else if (playStatus === 'on' && recStatus === 'off') {
    this.controlStatus = true;
    this.streamingService.recButton.next('on');
    this.r2rColor = 'warn';
   } else if (playStatus === 'on' && recStatus === 'standby') {
    this.controlStatus = true;
    this.streamingService.recButton.next('on');
    this.r2rColor = 'warn';
   } else if (playStatus === 'on' && recStatus === 'on') {
    this.controlStatus = true;
    this.streamingService.recButton.next('standby');
    this.r2rColor = 'primary';
  }
  }



  onWebButtonPressed() {
  let playStatus;
  let webStatus;
  this.streamingService.playButton.subscribe(r => {playStatus = r; });
  this.streamingService.webButton.subscribe(r => {webStatus = r; });
 if ( playStatus === 'off') {
   this.controlStatus = true;
  this.r2rColor = 'primary';
  this.streamingService.webButton.next('standby');
 } else if (playStatus === 'on' && webStatus === 'standby') {
  this.controlStatus = true;
   this.streamingService.webButton.next('on');
   this.r2rColor = 'warn';
 }  else if (playStatus === 'on' && webStatus === 'off') {
  this.controlStatus = true;
  this.streamingService.webButton.next('on');
  this.r2rColor = 'warn';
 } else if (playStatus === 'on' && webStatus === 'standby') {
  this.controlStatus = true;
  this.streamingService.webButton.next('on');
  this.r2rColor = 'warn';
 } else if (playStatus === 'on' && webStatus === 'on') {
  this.controlStatus = true;
  this.streamingService.webButton.next('standby');
  this.r2rColor = 'primary';
}
  }


onR2RButtonPressed() {
  let playStatus;
  let r2rStatus;
  this.streamingService.playButton.subscribe(r => {playStatus = r; });
  this.streamingService.r2rButton.subscribe(r => {r2rStatus = r; });
 if ( playStatus === 'off') {
   this.controlStatus = true;
  this.r2rColor = 'primary';
  this.streamingService.r2rButton.next('standby');
 } else if (playStatus === 'on' && r2rStatus === 'standby') {
  this.controlStatus = true;
   this.streamingService.r2rButton.next('on');
   this.r2rColor = 'warn';
 }  else if (playStatus === 'on' && r2rStatus === 'off') {
  this.controlStatus = true;
  this.streamingService.r2rButton.next('on');
  this.r2rColor = 'warn';
 } else if (playStatus === 'on' && r2rStatus === 'standby') {
  this.controlStatus = true;
  this.streamingService.r2rButton.next('on');
  this.r2rColor = 'warn';
 } else if (playStatus === 'on' && r2rStatus === 'on') {
  this.controlStatus = true;
  this.streamingService.r2rButton.next('standby');
  this.r2rColor = 'primary';
}
}

onPlayButtonPressed() {
  let playStatus;
  let webStatus;
  let recStatus;
  let r2rStatus;
  this.streamingService.r2rButton.subscribe(r => {r2rStatus = r; });
  this.streamingService.recButton.subscribe(r => {recStatus = r; });
  this.streamingService.webButton.subscribe(r => {webStatus = r; });
  this.streamingService.playButton.subscribe(r => {playStatus = r; });
 if ( playStatus === 'off' && webStatus === 'off' && recStatus === 'off' && r2rStatus === 'off' ) {
  this.recColor = ' ';

  this.controlStatus = false;
 } else if (playStatus === 'off' && (webStatus === 'standby' || recStatus === 'standby' || r2rStatus === 'standby') ) {
  this.controlStatus = true;
  this.pausOn = true;
   this.streamingService.playButton.next('on');
   this.recColor = 'warn';
 } else if (playStatus === 'on' && (webStatus === 'standby' || recStatus === 'standby' || r2rStatus === 'standby') ) {
  this.pausOn = false;
  this.recColor = ' ';
  this.pausOn = true;
}

}
onStopButtonPressed(){}

}

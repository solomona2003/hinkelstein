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

  onWebButtonPressed() {

    
  }

//   onRecButtonPressed() {
//   let playStatus;
//   let recStatus;
//   let webStatus;
//   let r2rStatus;
//   this.streamingService.r2rButton.subscribe(r => {r2rStatus = r; });
//   this.streamingService.webButton.subscribe(r => {webStatus = r; });
//   this.streamingService.playButton.subscribe(r => {playStatus = r; });
//   this.streamingService.recButton.subscribe(r => {recStatus = r; });
//  if ( playStatus === 'off' && recStatus === 'off') {
//    this.controlStatus = true;
//   this.recColor = 'accent';
//   this.streamingService.recButton.next('standby');
//   this.streamingService.playButton.next('on');
//  } else  if (playStatus === 'on' && recStatus === 'standby') {
//   this.recColor = 'basic';
//    this.streamingService.recButton.next('off');
//  } else  if (playStatus === 'on' && recStatus === 'off') {
//   this.recColor = 'accent';
//   this.streamingService.recButton.next('standby');
//  } else  if (playStatus === 'rec' && recStatus === 'standby') {
//   this.recColor = 'warn';
//   this.streamingService.recButton.next('on');
//  } else  if (playStatus === 'rec' && recStatus === 'off') {
//   this.recColor = 'warn';
//   this.streamingService.recButton.next('on');
//  } else  if (playStatus === 'rec' && recStatus === 'on') {
//   this.recColor = 'accent';
//   this.streamingService.recButton.next('standby');
//  }



//  if (recStatus === 'off' && r2rStatus === 'off' && webStatus === 'off') {
//    this.controlStatus = false;
//    this.streamingService.playButton.next('off');
//  }
//   }



//   onWebButtonPressed() {
//     let playStatus;
//     let recStatus;
//     let webStatus;
//     let r2rStatus;
//     this.streamingService.r2rButton.subscribe(r => {r2rStatus = r; });
//     this.streamingService.webButton.subscribe(r => {webStatus = r; });
//     this.streamingService.playButton.subscribe(r => {playStatus = r; });
//     this.streamingService.recButton.subscribe(r => {recStatus = r; });
//  if ( playStatus === 'off' && webStatus === 'off') {
//    this.controlStatus = true;
//   this.webColor = 'accent';
//   this.streamingService.webButton.next('standby');
//   this.streamingService.playButton.next('on');
//  } else  if (playStatus === 'on' && webStatus === 'standby') {
//   this.webColor = 'basic';
//    this.streamingService.webButton.next('off');
//  } else  if (playStatus === 'on' && webStatus === 'off') {
//   this.webColor = 'accent';
//   this.streamingService.webButton.next('standby');
//  }  else  if (playStatus === 'rec' && webStatus === 'standby') {
//   this.webColor = 'warn';
//   this.streamingService.webButton.next('on');
//  } else  if (playStatus === 'rec' && webStatus === 'off') {
//   this.webColor = 'warn';
//   this.streamingService.webButton.next('on');
//  } else  if (playStatus === 'rec' && webStatus === 'on') {
//   this.webColor = 'accent';
//   this.streamingService.webButton.next('standby');
//  }


//  if (recStatus === 'off' && r2rStatus === 'off' && webStatus === 'off') {
//   this.controlStatus = false;
//   this.streamingService.playButton.next('off');
// }
//   }


// onR2RButtonPressed() {
//   let playStatus;
//   let recStatus;
//   let webStatus;
//   let r2rStatus;
//   this.streamingService.r2rButton.subscribe(r => {r2rStatus = r; });
//   this.streamingService.webButton.subscribe(r => {webStatus = r; });
//   this.streamingService.playButton.subscribe(r => {playStatus = r; });
//   this.streamingService.recButton.subscribe(r => {recStatus = r; });
//  if ( playStatus === 'off' && r2rStatus === 'off') {
//    this.controlStatus = true;
//   this.r2rColor = 'accent';
//   this.streamingService.r2rButton.next('standby');
//   this.streamingService.playButton.next('on');
//  } else  if (playStatus === 'on' && r2rStatus === 'standby') {
//   this.r2rColor = 'basic';
//    this.streamingService.r2rButton.next('off');
//  } else  if (playStatus === 'on' && r2rStatus === 'off') {
//   this.r2rColor = 'accent';
//   this.streamingService.r2rButton.next('standby');
//  } else  if (playStatus === 'rec' && r2rStatus === 'standby') {
//   this.r2rColor = 'warn';
//   this.streamingService.r2rButton.next('on');
//  } else  if (playStatus === 'rec' && r2rStatus === 'off') {
//   this.r2rColor = 'warn';
//   this.streamingService.r2rButton.next('on');
//  } else  if (playStatus === 'rec' && r2rStatus === 'on') {
//   this.r2rColor = 'accent';
//   this.streamingService.r2rButton.next('standby');
//  } 

//  if (recStatus === 'off' && r2rStatus === 'off' && webStatus === 'off') {
//   this.controlStatus = false;
//   this.streamingService.playButton.next('off');
// }
//   }


// onPlayButtonPressed() {
//   let playStatus;
//   let webStatus;
//   let recStatus;
//   let r2rStatus;
//   this.streamingService.r2rButton.subscribe(r => {r2rStatus = r; });
//   this.streamingService.recButton.subscribe(r => {recStatus = r; });
//   this.streamingService.webButton.subscribe(r => {webStatus = r; });
//   this.streamingService.playButton.subscribe(r => {playStatus = r; });
//  if ( playStatus === 'on' && (webStatus === 'standby' || recStatus === 'standby' || r2rStatus === 'standby' ) ) {
//   this.playColor = '#f44336';
  
//   this.streamingService.playButton.next('rec');
  
//    if  (webStatus === 'standby') {
//      if (playStatus === 'rec' && webStatus === 'standby') {
//       this.webColor = 'warn';
//       this.streamingService.webButton.next('on');
//      } else  if (playStatus === 'rec' && webStatus === 'off') {
//       this.webColor = 'warn';
//       this.streamingService.webButton.next('on');
//      } else  if (playStatus === 'rec' && webStatus === 'on') {
//       this.webColor = 'accent';
//       this.streamingService.webButton.next('standby');
//      }} else if  (recStatus === 'standby') {

//        if (playStatus === 'rec' && recStatus === 'standby') {
//         this.recColor = 'warn';
//         this.streamingService.recButton.next('on');
//        } else  if (playStatus === 'rec' && recStatus === 'off') {
//         this.recColor = 'warn';
//         this.streamingService.recButton.next('on');
//        } else  if (playStatus === 'rec' && recStatus === 'on') {
//         this.recColor = 'accent';
//         this.streamingService.recButton.next('standby');
//        }} else if  (r2rStatus === 'standby') {
//         if (playStatus === 'rec' && r2rStatus === 'standby') {
//           this.r2rColor = 'warn';
//           this.streamingService.r2rButton.next('on');
//          } else  if (playStatus === 'rec' && r2rStatus === 'off') {
//           this.r2rColor = 'warn';
//           this.streamingService.r2rButton.next('on');
//          } else  if (playStatus === 'rec' && r2rStatus === 'on') {
//           this.r2rColor = 'accent';
//           this.streamingService.r2rButton.next('standby');
//          } }

//          else if (playStatus === 'rec' && (webStatus === 'on' || recStatus === 'on' || r2rStatus === 'on')) {

//   if (webStatus === 'on' && recStatus === 'on' && r2rStatus === 'on') {
//     this.onR2RButtonPressed(); this.onRecButtonPressed(); this.onWebButtonPressed();
//   } else if  (webStatus === 'on') {
//     this.onWebButtonPressed();
//   } else if  (recStatus === 'on') {
//     this.onRecButtonPressed();
//   } else if  (r2rStatus === 'on') {
//     this.onR2RButtonPressed();
//   this.playColor = 'purple';
//   this.pausOn = false;
//   this.streamingService.playButton.next('on');
//  }
//  }
//  }this.pausOn = true;}
// onStopButtonPressed() {
//   this.playColor = '#6B6B6B';
//   this.pausOn = false;
//   this.controlStatus = false;
//   this.recColor = 'purple';
//   this.r2rColor = 'purple';
//   this.webColor = 'purple';
//   this.streamingService.playButton.next('off');
//   this.streamingService.r2rButton.next('off');
//   this.streamingService.webButton.next('off');
//   this.streamingService.recButton.next('off');
// }

}

import { BehaviorSubject } from 'rxjs';


export class StreamingService {
    webButton = new BehaviorSubject<string>('off');
    recButton = new BehaviorSubject<string>('off');
    r2rButton = new BehaviorSubject<string>('off');
    playButton = new BehaviorSubject<string>('off');
    stopButton = new BehaviorSubject<string>('off');






 /**
   * Method used to control recording and streaming of event.
   * @param btn button name string
   */

  //  the WEB button, one of the three
//   public onClickStreamControls(btn: string): void {
//     if (btn === 'WEB') {
//       const type = 'WEB';
//       this.datalayer.callSmartApi('toggleSingleStream', '', { type }).subscribe(
//         response => {
//           console.log(response.json());
//           const sM = response.json().streamStates;
//           const status = response.json().status;
//           // this.status = response.json().status;
//           this.resetSingleStreamToggles(sM, status);
//         },
//         error => {
//           console.log(error);
//           if (this.strictAuthCheck) { this.checkAuthorizationStatus(); }
//         }
//       );
//     }

//     // the R2R button, one of the three
//     if (btn === 'R2R') {
//       const type = 'ROOM_2_ROOM';
//       this.datalayer.callSmartApi('toggleSingleStream', '', { type }).subscribe(
//         response => {
//           console.log(response.json());
//           const sM = response.json().streamStates;
//           const status = response.json().status;
//           //  this.status = response.json().status;
//           this.resetSingleStreamToggles(sM, status);
//         },
//         error => {
//           console.log(error);
//           if (this.strictAuthCheck) { this.checkAuthorizationStatus(); }
//         }
//       );
//     }
//     // the start button one of the three
//     if (btn === 'REC') {
//       const type = 'RECORD';
//       this.datalayer.callSmartApi('toggleSingleStream', '', { type }).subscribe(
//         response => {
//           this.recSpin = true;
//           console.log(response.json());
//           const sM = response.json().streamStates;
//           const status = response.json().status;
//           this.resetSingleStreamToggles(sM, status);

//         },
//         error => {
//           console.log(error);
//           this.recSpin = true;
//           if (this.strictAuthCheck) { this.checkAuthorizationStatus(); }
//         }

//       );

//     }

//     // start recording
//     if (btn === 'START') {
//     //   this.btnPressedCounter = this.btnPressedCounter + 1;
//       // call API here
//       this.datalayer.callSmartApi('toggleStream').subscribe(
//         response => {

//           // tslint:disable-next-line:triple-equals
//           this.statusStartStop = (response.json().status == 'true');
//         //   console.log('start stop type of', typeof this.statusStartStop);


//         //   if (this.debug()) { console.log(response.json()); }
//           if (response.json().status === 'true') {
//             this.statusOfRec = response.json().status;
//             this.recStatus = true;
//           } else {

//             this.recStatus = false;
//           }
//           this.recStatusUpdated.next(this.recStatus);
//           // reset SingleStreamToggles
//           const sM = response.json().streamStates;
//           const status = response.json().status;
//           this.resetSingleStreamToggles(sM, status);
//         },
//         error => {
//           console.log(error);
//           if (this.strictAuthCheck) { this.checkAuthorizationStatus(); }
//         }
//       );
//     }
//     if (btn === 'STOP') {
//       this.statusOfRec = false;
//       this.btnPressedCounter = 0;
//       this.datalayer.callSmartApi('stop').subscribe(
//         response => {
//           // tslint:disable-next-line:triple-equals
//           this.statusStartStop = (response.json().status == 'true');
//           console.log('start stop type of', typeof this.statusStartStop);

//           if (this.debug()) { console.log(response); }
//         },
//         error => {
//           console.log(error);
//           this.logout();
//         },

//         () => {
//           // not sure if this is intentional
//           this.logout();
//         }
//       );
//     }

//   }














    
}




import { LeftsliderService } from './../../leftslider/leftslider.service';
import { Subscription } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AdhocmodalComponent } from './../adhocmodal/adhocmodal.component';
import { CoursedetailComponent } from './../coursedetail/coursedetail.component';

import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {





  dialogResult: string;
  constructor( public dialog: MatDialog, private leftsliderService: LeftsliderService) {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(AdhocmodalComponent, {
      width: '750px',
      height: '500px',
      data: 'This text is passed into the dialog!'
    });

    dialogRef.afterClosed().subscribe(result => {

      this.dialogResult = result;
    });
  }

  ngOnInit() {
  }

 

}

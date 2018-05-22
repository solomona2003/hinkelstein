import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { PtzcontrolmodalComponent } from '../ptzcontrolmodal/ptzcontrolmodal.component';

@Component({
  selector: 'app-previews',
  templateUrl: './previews.component.html',
  styleUrls: ['./previews.component.css']
})
export class PreviewsComponent implements OnInit {

  dialogResult: string;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(PtzcontrolmodalComponent, {
      disableClose: true,
      width: '650px',
      height: '620px',
      minWidth: '545px',
      data: 'This text is passed into the dialog!'
    });

    dialogRef.afterClosed().subscribe(result => {

      this.dialogResult = result;
    });
  }

  ngOnInit() {
  }

}

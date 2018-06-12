import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdhocmodalComponent } from './../adhocmodal/adhocmodal.component';

@Injectable()
export class WelcomeService {

    constructor (private dialog: MatDialog) {}
    dialogResult: string;
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

}

import { AdhocmodalComponent } from './../adhocmodal/adhocmodal.component';
import { CourseeditmodalComponent } from './../courseeditmodal/courseeditmodal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  dialogResult: string;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CourseeditmodalComponent, {
      width: '800px',
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

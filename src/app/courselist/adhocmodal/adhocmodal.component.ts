import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogContent } from '@angular/material';
@Component({
  selector: 'app-adhocmodal',
  templateUrl: './adhocmodal.component.html',
  styleUrls: ['./adhocmodal.component.css']
})
export class AdhocmodalComponent implements OnInit {

  constructor(public dialModalRef: MatDialogRef<any>) { }

  ngOnInit() {
  }


  changePosition() {
    this.dialModalRef.updatePosition({ top: '50px', left: '50px' });
}
}

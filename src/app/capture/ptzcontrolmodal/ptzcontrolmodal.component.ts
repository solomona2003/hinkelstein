import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { PreviewsComponent } from './../previews/previews.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ptzcontrolmodal',
  templateUrl: './ptzcontrolmodal.component.html',
  styleUrls: ['./ptzcontrolmodal.component.css']
})
export class PtzcontrolmodalComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private _formBuilder: FormBuilder, private router: Router,
     public thisDialogRef: MatDialogRef<PreviewsComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

ngOnInit() { }


}

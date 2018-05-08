import { WelcomeComponent } from './../welcome/welcome.component';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,
  MatDialogContent, MatFormField, MatDialogActions, MAT_DIALOG_DATA } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-adhocmodal',
  templateUrl: './adhocmodal.component.html',
  styleUrls: ['./adhocmodal.component.css']
})
export class AdhocmodalComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private router: Router,
     public thisDialogRef: MatDialogRef<WelcomeComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }




  // properties related to chips
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  // chips

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

open() {
this.router.navigate(['/capture', {outlets: {'topleft': ['preview'],
                       'topright': ['streamcontrol'],
                       'bottomleft': ['preset'], 'bottomright': ['timer'] }} ] );

                       this.thisDialogRef.close('open');
}

}

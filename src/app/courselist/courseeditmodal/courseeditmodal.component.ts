import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { CoursedetailComponent } from './../coursedetail/coursedetail.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,
  MatDialogContent, MatFormField, MatDialogActions,
   MAT_DIALOG_DATA, MatStepperNext, MatChipInputEvent, MatTableDataSource, MatTable } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { Element1 } from './element1.model';


@Component({
  selector: 'app-coureeditmodal',
  templateUrl: './courseeditmodal.component.html',
  styleUrls: ['./courseeditmodal.component.css',
  'courseeditmodalStep1.component.css',
  'courseeditmodalStep2.component.css',
  'courseeditmodalStep3.component.css']
})
export class CourseeditmodalComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


      //  for combo box
      foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ];

  constructor(private _formBuilder: FormBuilder, private router: Router,
     public thisDialogRef: MatDialogRef<CoursedetailComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }






  

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  // chips

  // Enter, comma
  // tslint:disable-next-line:member-ordering
  separatorKeysCodes = [ENTER, COMMA];

  // tslint:disable-next-line:member-ordering
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

    // properties related to chips
    // tslint:disable-next-line:member-ordering
    visible = true;
    // tslint:disable-next-line:member-ordering
    selectable = true;
    // tslint:disable-next-line:member-ordering
    removable = true;
    // tslint:disable-next-line:member-ordering
    addOnBlur = true;

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


  // end of chips


open() {
this.router.navigate(['/capture', {outlets: {'topleft': ['preview'],
                       'topright': ['streamcontrol'],
                       'bottomleft': ['preset'], 'bottomright': ['timer'] }} ] );

                       this.thisDialogRef.close('open');
}

onCloseCancel() {
  this.thisDialogRef.close('cancel');
}



// table
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}


// tslint:disable-next-line:member-ordering
ELEMENT_DATA: Element1[] = [
  { name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  { name: 'Helium', weight: 4.0026, symbol: 'He'},
  { name: 'Lithium', weight: 6.941, symbol: 'Li'},
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  { name: 'Boron', weight: 10.811, symbol: 'B'},
  { name: 'Carbon', weight: 12.0107, symbol: 'C'},
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N'},

];
// tslint:disable-next-line:member-ordering
displayedColumns = ['position', 'name', 'weight', 'symbol'];
// tslint:disable-next-line:member-ordering
dataSource = new MatTableDataSource(this.ELEMENT_DATA);

// end of table



}

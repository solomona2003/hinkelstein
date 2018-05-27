import { Course } from './course.model';
import { NgForm } from '@angular/forms';
import { CourseDetailSerivce } from './coursedetail.service';
import { AvailableAgreement } from './response.model';
import { AdhocmodalComponent } from './../adhocmodal/adhocmodal.component';
import { CourseeditmodalComponent } from './../coursedetail/courseeditmodal/courseeditmodal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { StatusValue } from './status.enum';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  dialogResult: string;


courseDetail: Course;
id: number;

agreementStatus: StatusValue;
killAgreementSubscription: Subscription;


// formData: any;

constructor(public dialog: MatDialog,
  private courseDetailSerivce: CourseDetailSerivce,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  // modal part

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

// end of modal part

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.courseDetail = this.courseDetailSerivce.getCourse(this.id);

      }
    );

    this.agreementStatus = this.courseDetailSerivce.requestSentStatus.getValue(); // from the BehaviorSubject
    this.killAgreementSubscription = this.courseDetailSerivce.requestSentStatus.subscribe(agreementStatus => {

      this.agreementStatus =  agreementStatus;
    });

  }

  onClickAgreed(form: NgForm) {
    if (form.valid ) {
     if (form.value.agreeCheck === true) {
      this.courseDetailSerivce.requestSentStatus.next(StatusValue.agreed);

     }
  }

  }

}

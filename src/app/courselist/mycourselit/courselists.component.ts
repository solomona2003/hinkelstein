import { Subject } from 'rxjs/Subject';
import { LeftsliderService } from './../../leftslider/leftslider.service';
import { LanguageService } from './../../Language/language.service';
import { AuthService } from './../../authentication/auth.service';
import { NgForm } from '@angular/forms';
import { Course } from './../coursedetail/course.model';
import { CourseDetailSerivce } from './../coursedetail/coursedetail.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-courselists',
  templateUrl: './courselists.component.html',
  styleUrls: ['./courselists.component.css']
})
export class CourselistsComponent implements OnInit, OnDestroy {
  @Output() courseWasSelected = new EventEmitter<Course>();
  killubscription: Subscription;
  killubscription1: Subscription;
  theCourse: Course[];
  theCourse1: Course[];
  persenal = true;
  changedLanguage: Subscription;
  componentText: any;

  constructor(private courseDetailSerivce: CourseDetailSerivce, private authService: AuthService,
     private languageService: LanguageService, private leftsliderService: LeftsliderService) {
this.courseDetailSerivce.personalCourses.next(this.persenal);

// get language

this.changedLanguage = this.leftsliderService.currentLanguage.subscribe(
  t => {
    this.componentText = this.languageService.getComponentText('CourseList')[t];
  },
  e => { console.log('', e); }

);
  }

  ngOnInit() {
    this.killubscription = this.courseDetailSerivce.courseChanged.subscribe(
      (course: Course[]) => {
        this.theCourse = course;
        console.log('theCourse ' + this.theCourse);

      }
    );
    this.theCourse = this.courseDetailSerivce.getCourses();


    this.killubscription1 = this.courseDetailSerivce.courseChanged1.subscribe(
      (course1: Course[]) => {
        this.theCourse1 = course1;
        console.log('theCourse1 ' + this.theCourse1);

      }
    );
    this.theCourse1 = this.courseDetailSerivce.getCourses1();
  }


  ngOnDestroy() {
    this.killubscription.unsubscribe();
    this.killubscription1.unsubscribe();
  }

  onTogle(form: NgForm) {

    this.persenal = !this.persenal;
    this.courseDetailSerivce.personalCourses.next(this.persenal);

  }

}

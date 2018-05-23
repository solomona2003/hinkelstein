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
  theCourse: Course[];
  constructor(private courseDetailSerivce: CourseDetailSerivce) { }

  ngOnInit() {
    this.killubscription = this.courseDetailSerivce.courseChanged.subscribe(
      (course: Course[]) => {
        this.theCourse = course;
        console.log('theCourse ' + this.theCourse);

      }
    );
    this.theCourse = this.courseDetailSerivce.getCourses();
  }


  ngOnDestroy() {
    this.killubscription.unsubscribe();
  }

}

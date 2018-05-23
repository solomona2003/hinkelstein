import { Course } from './../../coursedetail/course.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css']
})
export class CourseItemComponent implements OnInit {

  constructor() { }
  @Input() course: Course;
  @Input() index: number;

  ngOnInit() {
  }

}

import {  UserService } from './../../authentication/user.service';
import { Subject } from 'rxjs/Subject';
import { AvailableAgreement } from './response.model';
import { User } from './../../authentication/user.model';
import { Course } from './course.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatusValue } from './status.enum';

@Injectable()
export class CourseDetailSerivce {

    private user: User;
    constructor(private router: Router, private userService: UserService ) { }

    courseChanged = new Subject<Course[]>();


    private theCoure: Course[] =
        [
            new Course(1,
                'Physics',
                'P01',
                'summer',
            ),

            new Course(2,
                'Chemistry',
                'C01',
                'Winter',
            ),

        ];


    getCourse(index: number) {
        return this.theCoure.slice()[index];
    }

    setCourses(course: Course[]) {
        this.theCoure = course;
        this.courseChanged.next(this.theCoure.slice());
    }

    getCourses() {
        return this.theCoure.slice();
    }


    // addIngredientsToShoppingList (ingredient: Ingredient[]) {

    //     this.shoppingListService.onAddIngredient(ingredient);

    //    }

    updateCourse(index: number, course: Course) {
        this.theCoure[index] = course;
        this.courseChanged.next(this.theCoure.slice());

    }

    addCourse(course: Course) {
        this.theCoure.push(course);
        this.courseChanged.next(this.theCoure.slice());
    }

    onDelete(index: number) {
        this.theCoure.splice(index, 1);
        this.courseChanged.next(this.theCoure.slice());

    }



    // tslint:disable-next-line:member-ordering
    requestSentStatus = new BehaviorSubject(StatusValue.notAgreed);

    // tslint:disable-next-line:member-ordering
    availableAgreement: AvailableAgreement = { status: StatusValue.notAgreed };

    // sendAgreement(course: Course) {
    //     this.userService.userChanged.subscribe(r=>{r.has}) === course.courseId
    //         this.requestSentStatus.next(this.availableAgreement.status);
    //         // this.router.navigate(['/showresponce']);

    //     }

    }






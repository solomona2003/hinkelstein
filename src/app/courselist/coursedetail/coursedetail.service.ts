import { CourseeditmodalComponent } from './courseeditmodal/courseeditmodal.component';
import { MatDialog } from '@angular/material';
import { AuthService } from './../../authentication/auth.service';
import {  UserService } from './../../authentication/user.service';
import { Subject } from 'rxjs/Subject';
import { AvailableAgreement } from './response.model';
import { User } from './../../authentication/user.model';
import { Course } from './course.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';
import { StatusValue } from './status.enum';

@Injectable()
export class CourseDetailSerivce {

    dialogResult: string;
    private user: User;
    agreedto = false;
    constructor(private router: Router,
         private userService: UserService, private authService: AuthService, private dialog: MatDialog ) { }

    courseChanged = new Subject<Course[]>();
    courseChanged1 = new Subject<Course[]>();
   
    personalCourses = new BehaviorSubject(true);

    private theCoure: Course[] =
        [
            new Course('1',
                'Physics',
                'P01',
                'summer',
            ),

            new Course('2',
                'Chemistry',
                'C02',
                'Winter',
            ),

        ];

        private theCoure1: Course[] =
        [
            new Course('5',
                'Biology',
                'B04',
                'Winter',
            ),

            new Course('66',
                'Fundamentals of Programming',
                'FP01',
                'Winter',
            ),

        ];




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
        








    getCourse(index: number) {
        return this.theCoure.slice()[index];
    }

    getCourse1(index: number) {
        return this.theCoure1.slice()[index];
    }

    setCourses(course: Course[]) {
        this.theCoure = course;
        this.courseChanged.next(this.theCoure.slice());
    }

    getCourses() {
        return this.theCoure.slice();
    }

    getCourses1() {
        return this.theCoure1.slice();
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

    courseAgreement(id) {
        // this.requestSentStatus.next(StatusValue.agreed);
        // this.theCoure[index] = id;
        // this.theCoure.push().

    }


    // tslint:disable-next-line:member-ordering
    requestSentStatus = new BehaviorSubject(StatusValue.notAgreed);

    // tslint:disable-next-line:member-ordering
    availableAgreement: AvailableAgreement = { status: StatusValue.notAgreed };

    checkCourseHasBeenAgreedTo(id) {
        const userCourseIds = this.authService.state.agreedCoursesId;
        userCourseIds.forEach(item => {if ( item  === id) { this.agreedto = true; }
    });
return this.agreedto; }

    // sendAgreement(course: Course) {
    //     this.userService.userChanged.subscribe(r=>{r.has}) === course.courseId
    //         this.requestSentStatus.next(this.availableAgreement.status);
    //         // this.router.navigate(['/showresponce']);

    //     }

    }






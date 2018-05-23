import { Subject } from 'rxjs/Subject';
import { Course } from './../courselist/coursedetail/course.model';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {
    userChanged = new Subject<User[]>();
    private theUser: User[] =
        [
            // new User(1,
            //     'a01',
            //     'user@uniwien.ac.at',
            //     'teacher',
            //     [
            //         new Course(2, 'Chemistry', 'C01', 'Winter'),
            //         new Course(1, 'Physics', 'P01', 'summer')
            //     ]
            // ),



            // new User(2,
            //     'Chemistry',
            //     'C01',
            //     'Winter',
            //     [
            //         new Course(2, 'Chemistry', 'C01', 'Winter'),
            //         new Course(1, 'Physics', 'P01', 'summer')
            //     ]
            // ),

        ];


    setCourses(user: User[]) {
        this.theUser = user;
        this.userChanged.next(this.theUser.slice());
    }
}

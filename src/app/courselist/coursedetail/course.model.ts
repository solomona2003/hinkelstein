import { User } from './../../authentication/user.model';

export class Course {
    courseId: string;
    courseTitle: string;
    courseNumber: string;
    courseSemester: string;
    // haveAgreed: User[];

    constructor(courseId: string, courseTitle: string,
         courseNumber: string, courseSemester: string,
        //  haveAgreed: User[]
        ) {
this.courseId = courseId;
this.courseTitle = courseTitle;
this.courseNumber = courseNumber;
this.courseSemester = courseSemester;
// this.haveAgreed = haveAgreed;
    }
}


export class Course {
    courseId: number;
    courseTitle: string;
    courseNumber: string;
    courseSemester: string;

    constructor(courseId: number, courseTitle: string,
         courseNumber: string, courseSemester: string ) {
this.courseId = courseId;
this.courseTitle = courseTitle;
this.courseNumber = courseNumber;
this.courseSemester = courseSemester;
    }
}

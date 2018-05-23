import { Course } from './../courselist/coursedetail/course.model';
export interface User {
    userid: string;
    email: string;
    role: string;
    agreedCoursesId: Course[];
}

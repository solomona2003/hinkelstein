import { Course } from './../courselist/coursedetail/course.model';
export interface User {
    id: string;
    email: string;
    role: string;
    agreedCoursesId: string[];
}

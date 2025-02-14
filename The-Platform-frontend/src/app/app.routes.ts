import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { WatchCourseComponent } from './components/watch-course/watch-course.component';

export const routes: Routes = [
    {path:"", component: HomePageComponent , title:"Home Page"},
    {path:"home", redirectTo:"" , pathMatch:"full"},
    {path:"courseDetails", component: CourseDetailsComponent , title:"course details Page"},
    {path:"watchCourse", component: WatchCourseComponent , title:"watch course Page"},
];

import {Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';
import {WatchCourseComponent} from './components/watch-course/watch-course.component';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {InstructorPageComponent} from "./components/instructor-page/instructor-page.component";
import {CourseListPageComponent} from "./components/course-list-page/course-list-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {CheckOutPageComponent} from "./components/checkout-page/checkout-page.component";

export const routes: Routes = [
  {path: "", component: HomePageComponent, title: "Home Page"},
  {path: "home", redirectTo: "", pathMatch: "full"},

  {path: "courseDetails", component: CourseDetailsComponent, title: "Course details Page"},
  {path: "search", component: CourseListPageComponent, title: "Course Search Page"},
  {path: "watchCourse", component: WatchCourseComponent, title: "Watching Page"},
  {path: "user", component: UserProfileComponent, title: "User Page"},
  {path: "instructor", component: InstructorPageComponent, title: "Instructor Page"},
  {path: "login", component: LoginPageComponent, title: "Login Page"},
  {path: "checkout", component: CheckOutPageComponent, title: "Checkout Page"},


];

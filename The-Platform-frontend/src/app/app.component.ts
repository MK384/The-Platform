import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from "./components/footer/footer.component";
import { InstructorCardComponent } from "./components/instructor-card/instructor-card.component";
import { DetailedCourseCardComponent } from "./components/detailed-course-card/detailed-course-card.component";
import { BecomeInstructorCardComponent } from "./components/become-instructor-card/become-instructor-card.component";
import { CourseCardComponent } from "./components/course-card/course-card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomePageComponent, FooterComponent, InstructorCardComponent, DetailedCourseCardComponent, BecomeInstructorCardComponent, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The-Platform-frontend';
}

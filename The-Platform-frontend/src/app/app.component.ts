import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailedCourseCardComponent } from "./components/detailed-course-card/detailed-course-card.component";
import { CategoryCardComponent } from "./components/category-card/category-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The-Platform-frontend';
}

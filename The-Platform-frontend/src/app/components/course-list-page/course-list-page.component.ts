import { Component } from '@angular/core';
import { CourseCardComponent } from "../course-card/course-card.component";
import { FilterBarComponent } from "../filter-bar/filter-bar.component";

@Component({
  selector: 'app-course-list-page',
  standalone: true,
  imports: [CourseCardComponent, FilterBarComponent],
  templateUrl: './course-list-page.component.html',
  styleUrl: './course-list-page.component.css'
})
export class CourseListPageComponent {


  isDropdownOpen = false;
  

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

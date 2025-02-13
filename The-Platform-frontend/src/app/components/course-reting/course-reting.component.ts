import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-reting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-reting.component.html',
  styleUrl: './course-reting.component.css'
})
export class CourseRetingComponent {
  rating = 4.8;
  fullStars = Array(Math.floor(this.rating)).fill(0);
  hasHalfStar = this.rating % 1 !== 0;

  ratings = [
    { stars: 5, percent: 75 },
    { stars: 4, percent: 21 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0.5 }
  ];
}

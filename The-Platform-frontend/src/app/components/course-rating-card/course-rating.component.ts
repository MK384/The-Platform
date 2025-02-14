import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CourseRatingProps } from '../../../core/interfaces/CourseRatingProps.interface';

@Component({
  selector: 'app-course-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-rating.component.html',
  styleUrl: './course-rating.component.css'
})
export class CourseRatingComponent {

  fullStars!: any;
  hasHalfStar!: any;

  @Input() courseRating : CourseRatingProps = {
    overaRating: 4.8,
    ratings: [
      { stars: 5, percent: 75 },
      { stars: 4, percent: 21 },
      { stars: 3, percent: 3 },
      { stars: 2, percent: 1 },
      { stars: 1, percent: 0.5 }
    ],
    reviewersCount: 451444,
  }

  ngOnInit(){

    this.fullStars = Array(Math.floor(this.courseRating.overaRating)).fill(0);
    this.hasHalfStar = this.courseRating.overaRating % 1 !== 0;


  }




}

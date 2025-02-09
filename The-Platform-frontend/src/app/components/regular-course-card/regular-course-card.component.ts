import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CourseCardProps } from '../../../core/interfaces/CourseCardProps.interface';
import { KNotationFormatPipe } from '../../../core/pipes/k-notation-format.pipe';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';

@Component({
  selector: 'app-regular-course-card',
  standalone: true,
  imports: [RatingFormatPipe, KNotationFormatPipe, CommonModule],
  templateUrl: './regular-course-card.component.html',
  styleUrl: './regular-course-card.component.css'
})
export class RegularCourseCardComponent {

    @Input() cardData : CourseCardProps = {
      category: 'DESIGN',
      categoryBGColor: '#F7FBDE',
      categoryTextColor: '#F1B72F',
      title: 'The Python Mega Course: Build 10 Real World Applications',
      price: 57,
      rate: 5.0,
      enrolledStudents: 265700
    }

  
}

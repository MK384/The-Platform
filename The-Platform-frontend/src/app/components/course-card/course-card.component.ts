import { Component, Input } from '@angular/core';
import { CourseCardProps } from '../../../core/interfaces/CourseCardProps.interface';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';
import { KNotationFormatPipe } from '../../../core/pipes/k-notation-format.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RatingFormatPipe, KNotationFormatPipe, CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {


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

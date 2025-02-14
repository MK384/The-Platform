import { Component, Input } from '@angular/core';
import { CourseCardProps } from '../../../core/interfaces/CourseCardProps.interface';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';
import { KNotationFormatPipe } from '../../../core/pipes/k-notation-format.pipe';
import { CommonModule } from '@angular/common';
import { CategoryColorService } from '../../services/category-color.service';

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
    title: 'The Python Mega Course: Build 10 Real World Applications',
    price: 57,
    rate: 5.0,
    enrolledStudents: 265700
    courseImage:''
  }

  textColor!: string;
  bgColor!: string;

  constructor(private categoryColorService: CategoryColorService) {}

  ngOnInit() {
    const colors = this.categoryColorService.getCategoryColors(this.cardData.category);
    this.textColor = colors.text;
    this.bgColor = colors.background;
  }

}

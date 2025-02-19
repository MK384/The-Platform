import { Component, Input } from '@angular/core';
import { DetailedCourseCardProps } from '../../../core/interfaces/DetailedCourseCardProps.interface';
import { PriceFormatPipe } from '../../../core/pipes/price-format.pipe';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { KNotationFormatPipe } from '../../../core/pipes/k-notation-format.pipe';
import { CategoryColorService } from '../../services/category-color.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-course-card',
  standalone: true,
  imports: [PriceFormatPipe, RatingFormatPipe, NumberFormatPipe, KNotationFormatPipe, CommonModule],
  templateUrl: './detailed-course-card.component.html',
  styleUrl: './detailed-course-card.component.css'
})
export class DetailedCourseCardComponent {

  iconsUrls!:{
    star:string;
    clock:string;
    user:string;
    level:string;
  };

  constructor(private categoryColorService: CategoryColorService){

    this.iconsUrls = {

      star:'assets/course_icons/star.png',
      clock:'assets/course_icons/clock.png',
      user:'assets/course_icons/user-icon.png',
      level:'assets/course_icons/bar-chart.png'

    }

  }

  @Input() cardData:DetailedCourseCardProps = {

    title: "Adobe XD for Web Design: Essential Principles",
    category: "PRODUCTIVITY",
    instructor: "Kevin Gilbert",
    instructorImageUrl: "assets/instructor.jpeg",
    price: 14.00,
    oldPrice: 26.00,
    rating: 5.0,
    reviewCount: 357914,
    enrolledStudents: 265700,
    difficultyLevel :  'Beginner',
    duration: 6, // e.g., "10h 30m"
    imageUrl: "assets/course-image.png"

  }


    textColor!: string;
    bgColor!: string;

    ngOnInit() {
      const colors = this.categoryColorService.getCategoryColors(this.cardData.category);
      this.textColor = colors.text;
      this.bgColor = colors.background;
    }

}

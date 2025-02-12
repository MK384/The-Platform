import { Component, Input } from '@angular/core';
import { CategoryColorService } from '../../services/category-color.service';
import { CommonModule } from '@angular/common';
import { DetailedCourseCardProps } from '../../../core/interfaces/HoveringCourseCardProps.interface';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { KNotationFormatPipe } from '../../../core/pipes/k-notation-format.pipe';
import { PriceFormatPipe } from '../../../core/pipes/price-format.pipe';
import { DiscountPercentagePipe } from '../../../core/pipes/discount-percentage.pipe';

@Component({
  selector: 'app-hovering-course-card',
  standalone: true,
  imports: [CommonModule,RatingFormatPipe, NumberFormatPipe, KNotationFormatPipe, PriceFormatPipe, DiscountPercentagePipe],
  templateUrl: './hovering-course-card.component.html',
  styleUrl: './hovering-course-card.component.css'
})
export class HoveringCourseCardComponent {

@Input() cardData :DetailedCourseCardProps =  {
  title: '2021 Complete Python Bootcamp From Zero to Hero in Python',
  category: 'DEVELOPMENT',
  instructor: 'Kevin Gilbert',
  instructorImageUrl: '../../../assets/instructor-asset/instructor1.png',
  price: 14,
  oldPrice: 26,
  discount: true,
  rating: 5.0,
  reviewCount: 357914,
  enrolledStudents: 265700,
  difficultyLevel: 'Beginner',
  duration: 6,
  learningPoints: [

    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Create games with Python, like Tic Tac Toe and Blackjack!",
    "Create games with Python, like Tic Tac Toe and Blackjack!"
  ]
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

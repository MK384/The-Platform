import {Component, Input} from '@angular/core';
import {DetailedCourseCardProps} from "../../../core/interfaces/DetailedCourseCardProps.interface";
import {RatingFormatPipe} from "../../../core/pipes/rating-format.pipe";
import {PriceFormatPipe} from "../../../core/pipes/price-format.pipe";
import {NumberFormatPipe} from "../../../core/pipes/number-format.pipe";

@Component({
  selector: 'app-wishlist-course-card',
  standalone: true,
  imports: [RatingFormatPipe, PriceFormatPipe, NumberFormatPipe],
  templateUrl: './wishlist-course-card.component.html',
  styleUrl: './wishlist-course-card.component.css'
})
export class WishlistCourseCardComponent {

  // @ts-ignore
  @Input() cardData!: DetailedCourseCardProps= {
    category: "",
    imageUrl: "assets/course-images/c1.png",
    instructor: "Harry Potter, John Wick",
    oldPrice: 49.00,
    price: 37.00,
    rating: 4.6,
    reviewCount: 451444,
    title: "The Ultimate Drawing Course - Beginner to Advanced"
  };

}

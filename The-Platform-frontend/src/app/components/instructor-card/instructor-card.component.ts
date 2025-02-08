import { Component, Input } from '@angular/core';
import { InstructorCardProps } from '../../../core/interfaces/InstuctorCardProps.interface';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';

@Component({
  selector: 'app-instructor-card',
  standalone: true,
  imports: [NumberFormatPipe, RatingFormatPipe],
  templateUrl: './instructor-card.component.html',
  styleUrl: './instructor-card.component.css'
})
export class InstructorCardComponent {


@Input() cardData: InstructorCardProps = {
  name: 'Devon Lane',
  title: 'Senior Developer',
  imageUrl: '../../../assets/instructor-asset/instructor1.png',
  rating: 4.6,
  students: 854
}

}

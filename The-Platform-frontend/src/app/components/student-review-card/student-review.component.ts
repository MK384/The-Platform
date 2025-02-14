import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StudentReview } from '../../../core/interfaces/StudentReview.interface';
import { TimeAgoPipe } from '../../../core/pipes/time-ago.pipe';

@Component({
  selector: 'app-student-review',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './student-review.component.html',
  styleUrl: './student-review.component.css'
})
export class StudentReviewComponent {


  @Input() review : StudentReview = {
    name: 'Guy Hawkins',
    profileImage: '../../../assets/profile-images/1.png',
    reviewDate: new Date(),
    rating: 5,
    text: 'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.'
  };

  getStarsArray(): number[] {
    return Array(this.review.rating).fill(0);
  }

}

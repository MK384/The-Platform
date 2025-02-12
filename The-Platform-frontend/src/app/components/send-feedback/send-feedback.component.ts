import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-send-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './send-feedback.component.html',
  styleUrl: './send-feedback.component.css'
})
export class SendFeedbackComponent {
  rating = 5;
  fullStars = Array(this.rating).fill(0);
}

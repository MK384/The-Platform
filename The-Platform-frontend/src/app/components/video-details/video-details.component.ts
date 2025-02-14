import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css'
})
export class VideoDetailsComponent {
  studentsWatching = 512;
  lastUpdated = 'Oct 26, 2020';
  commentsCount = 154;

  studentAvatars = [
    '../../../assets/watch-course/Avatar.png',
    '../../../assets/watch-course/Avatar(1).png',
    '../../../assets/watch-course/Avatar(2).png',
    '../../../assets/watch-course/Avatar(3).png',
    '../../../assets/watch-course/Avatar(4).png'
  ];
}

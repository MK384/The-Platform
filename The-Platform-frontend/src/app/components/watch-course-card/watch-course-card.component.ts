import { Component, Input } from '@angular/core';
import { WatchCourseCard } from '../../../core/interfaces/WatchCourseCardProps.interface';

@Component({
  selector: 'app-watch-course-card',
  standalone: true,
  imports: [],
  templateUrl: './watch-course-card.component.html',
  styleUrl: './watch-course-card.component.css'
})
export class WatchCourseCardComponent {
  @Input() course: WatchCourseCard = {
    courseImage: '../../../assets/user-page-assets/course1.png',
    courseTitle: 'Reiki Level I, II and Master/Teacher Program',
    lectureTitle: '1. Intorductions',
    completionPercentage: 75
  }
}

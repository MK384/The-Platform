import { Component, Input } from '@angular/core';
import { DetailedCourseCardProps } from '../../../core/interfaces/DetailedCourseCardProps.interface';

@Component({
  selector: 'app-detailed-course-card',
  standalone: true,
  imports: [],
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

  constructor(){

    this.iconsUrls = {

      star:'../../../assets/course_icons/star.png',
      clock:'../../../assets/course_icons/clock.png',
      user:'../../../assets/course_icons/user-icon.png',
      level:'../../../assets/course_icons/bar-chart.png'

    }

  }

  @Input() card:DetailedCourseCardProps = {

    title: "Adobe XD for Web Design: Essential Principles",
    category: "PRODUCTIVITY",
    instructor: "Kevin Gilbert",
    instructorImageUrl: "../../../assets/instructor.jpeg",
    price: "14.00",
    oldPrice: "26.00",
    rating: "5.0",
    reviewCount: "357,914",
    enrolledStudents: "265.7K",
    difficultyLevel :  'Beginner',
    duration: 6, // e.g., "10h 30m"
    imageUrl: "../../../assets/course-image.png"

  }

}

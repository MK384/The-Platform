import { Component } from '@angular/core';
import { DetailedCourseCard } from '../../../core/interfaces/detailed-course-card.interface';

@Component({
  selector: 'app-detailed-course-card',
  standalone: true,
  imports: [],
  templateUrl: './detailed-course-card.component.html',
  styleUrl: './detailed-course-card.component.css'
})
export class DetailedCourseCardComponent {

  card:DetailedCourseCard = {

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

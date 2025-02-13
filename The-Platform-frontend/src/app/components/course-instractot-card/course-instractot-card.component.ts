import { Component, Input } from '@angular/core';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';
import { CourseInstractourCard } from '../../../core/interfaces/CourseInstractourCard.interface';
import { CommonModule, DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-course-instractot-card',
  standalone: true,
  imports: [ RatingFormatPipe, NumberFormatPipe ,CommonModule,DecimalPipe],
  templateUrl: './course-instractot-card.component.html',
  styleUrl: './course-instractot-card.component.css'
})
export class CourseInstractotCardComponent {
  icons!: {
    star: string;
    user: string;
    play: string;
  };
  constructor() {

    this.icons = {
      star: '../../../assets/course-details/svg/StarSmall.svg',
      user: '../../../assets/course-details/svg/UsersSmall.svg',
      play: '../../../assets/course-details/svg/PlayCircleSmall.svg'
    }

  }
  @Input() instrCardData: CourseInstractourCard = {
    instrImg: '../../../assets/course-details/instr1.png',
    instName: 'Vako Shvili',
    instJob1: 'Web Designer',
    instJob2: 'Best-Selling Instructor',
    rateNum:4.9,
    rateName: 'Course rating',
    studentsNum:236568,
    students: ' Students',
    coursesNum:9 ,
    courses: 'Courses',
    about: 'One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed...'

  }


}

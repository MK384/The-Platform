import { Component, Input } from '@angular/core';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { RatingFormatPipe } from '../../../core/pipes/rating-format.pipe';
import { CourseInstructorCardProps } from '../../../core/interfaces/CourseInstructorCardProps.interface';
import { CommonModule, DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-course-instructor-card',
  standalone: true,
  imports: [ RatingFormatPipe, NumberFormatPipe ,CommonModule,DecimalPipe],
  templateUrl: './course-instructor-card.component.html',
  styleUrl: './course-instructor-card.component.css'
})
export class CourseInstructorCardComponent {
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
  @Input() instrCardData: CourseInstructorCardProps = {
    instrImg: '../../../assets/course-details/instr1.png',
    instName: 'Vako Shvili',
    instrTitle: 'Web Designer & Best-Selling Instructor',
    rateNum: 4.9,
    studentsNum: 236568,
    coursesNum: 9,
    about: 'One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed...',
  
  }


}

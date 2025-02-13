import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { first } from 'rxjs';
import { CourseCardProps } from '../../../core/interfaces/CourseCardProps.interface';
import { CourseCardComponent } from "../course-card/course-card.component";
import { RegularCourseCardComponent } from "../regular-course-card/regular-course-card.component";
import { StudentReviewComponent } from "../student-review/student-review.component";
import { StudentReview } from '../../../core/interfaces/StudentReview.interface';

@Component({
  selector: 'app-instructor-page',
  standalone: true,
  imports: [CommonModule, RegularCourseCardComponent, StudentReviewComponent],
  templateUrl: './instructor-page.component.html',
  styleUrl: './instructor-page.component.css'
})
export class InstructorPageComponent {

  instructor = {

    firstName: 'Vako',
    lastName : 'shvili',
    isTopRated : true,

  }

  activeTab: string = 'courses'; 
  tabs = [
    { id: 'courses', name: 'Courses' },
    { id: 'review', name: 'Review' },

  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId; 
    // Scroll to the section
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


     courses: CourseCardProps[] = [
      {
        category: 'IT & SOFTWARE',
        title: 'Learn Python Programming Masterclass',
        price: 35,
        rate: 4.0,
        enrolledStudents: 211434,
        courseImage: '../../../assets/course-images/c1.png'
      },
      {
        category: 'DESIGN',
        title: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
        price: 49,
        rate: 4.9,
        enrolledStudents: 197637,
        courseImage: '../../../assets/course-images/c2.png'
      },
      {
        category: 'DEVELOPMENTS',
        title: 'Adobe Premiere Pro CC - Advanced Training Course',
        price: 32,
        rate: 4.6,
        enrolledStudents: 236568,
        courseImage: '../../../assets/course-images/c3.png'
      },
      {
        category: 'MARKETING',
        title: 'Ultimate AWS Certified Solutions Architect Associate 2021',
        price: 13,
        rate: 4.1,
        enrolledStudents: 511123,
        courseImage: '../../../assets/course-images/c4.png'
      },{
        category: 'DESIGN',
        title: 'Ultimate Google Ads Training 2020: Profit with Pay Per Click',
        price: 9,
        rate: 4.1,
        enrolledStudents: 154817,
        courseImage: '../../../assets/course-images/c5.png'
      },
      {
        category: 'IT & SOFTWARE',
        title: 'Learn Ethical Hacking From Scratch 2021',
        price: 35,
        rate: 4.8,
        enrolledStudents: 451444,
        courseImage: '../../../assets/course-images/c6.png'
      },
      {
        category: 'DEVELOPMENTS',
        title: 'Angular - The Complete Guide (2021 Edition)',
        price: 16,
        rate: 4.3,
        enrolledStudents: 197637,
        courseImage: '../../../assets/course-images/c7.png'
      },]

      reviews: StudentReview[] = [
        {
          name: 'Guy Hawkins',
          profileImage: '../../../assets/profile-images/1.png',
          reviewDate: '1 week ago',
          rating: 5,
          text: 'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.'
        },
        {
          name: 'Dianne Russell',
          profileImage: '../../../assets/profile-images/2.png',
          reviewDate: '51 mins ago',
          rating: 5,
          text: 'This course is just amazing! It has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation and I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent Instructor Vako!! Highly recommend this course! Take the next step.'
        },
        {
          name: 'Bessie Cooper',
          profileImage: '../../../assets/profile-images/3.png',
          reviewDate: '6 hours ago',
          rating: 5,
          text: 'Webflow course was good, it covers design secrets, and to build responsive web pages, blog, and some more tricks and tips about Webflow. I enjoyed the course and it helped me to add web development skills related to Webflow in my toolbox. Thank you Vako.'
        },
        {
          name: 'Eleanor Pena',
          profileImage: '../../../assets/profile-images/4.png',
          reviewDate: '1 day ago',
          rating: 5,
          text: 'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.'
        },
        {
          name: 'Ralph Edwards',
          profileImage: '../../../assets/profile-images/5.png',
          reviewDate: '2 days ago',
          rating: 5,
          text: 'GREAT Course! Instructor was very descriptive and professional. I learned a TON that is going to apply immediately to real-life work. Thanks so much, can’t wait for the next one!'
        },
        {
          name: 'Arlene McCoy',
          profileImage: '../../../assets/profile-images/6.png',
          reviewDate: '1 week ago',
          rating: 5,
          text: 'This should be one of the best courses I ever made about UX/UI in Udemy. Highly recommend to those who are new to UX/UI and want to become a UX/UI freelancer!'
        }
      ];
      

}

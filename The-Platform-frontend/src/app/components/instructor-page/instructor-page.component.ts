import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { first } from 'rxjs';
import { CourseCardProps } from '../../../core/interfaces/CourseCardProps.interface';
import { CourseCardComponent } from "../course-card/course-card.component";
import { RegularCourseCardComponent } from "../regular-course-card/regular-course-card.component";
import { StudentReviewComponent } from "../student-review-card/student-review.component";
import { StudentReview } from '../../../core/interfaces/StudentReview.interface';

@Component({
  selector: 'app-instructor-page',
  standalone: true,
  imports: [CommonModule, RegularCourseCardComponent, StudentReviewComponent],
  templateUrl: './instructor-page.component.html',
  styleUrl: './instructor-page.component.css'
})
export class InstructorPageComponent {



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
        reviewDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
        rating: 5,
        text: 'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.'
      },
      {
        name: 'Dianne Russell',
        profileImage: '../../../assets/profile-images/2.png',
        reviewDate: new Date(Date.now() - 51 * 60 * 1000), // 51 minutes ago
        rating: 5,
        text: 'This course is just amazing! It has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation and I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent Instructor Vako!! Highly recommend this course! Take the next step.'
      },
      {
        name: 'Bessie Cooper',
        profileImage: '../../../assets/profile-images/3.png',
        reviewDate: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        rating: 5,
        text: 'Webflow course was good, it covers design secrets, and to build responsive web pages, blog, and some more tricks and tips about Webflow. I enjoyed the course and it helped me to add web development skills related to Webflow in my toolbox. Thank you Vako.'
      },
      {
        name: 'Eleanor Pena',
        profileImage: '../../../assets/profile-images/4.png',
        reviewDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        rating: 5,
        text: 'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.'
      },
      {
        name: 'Ralph Edwards',
        profileImage: '../../../assets/profile-images/5.png',
        reviewDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        rating: 5,
        text: 'GREAT Course! Instructor was very descriptive and professional. I learned a TON that is going to apply immediately to real-life work. Thanks so much, can’t wait for the next one!'
      },
      {
        name: 'Arlene McCoy',
        profileImage: '../../../assets/profile-images/6.png',
        reviewDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
        rating: 5,
        text: 'This should be one of the best courses I ever made about UX/UI in Udemy. Highly recommend to those who are new to UX/UI and want to become a UX/UI freelancer!'
      }
    ];
    

  instructor = {

    firstName: 'Vako',
    lastName : 'shvili',
    isTopRated : true,
    coursesCount: this.courses.length,
    aboutMe: `                    One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or
                    more like got himself fired from his own startup.
    
                    He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed, and
                    make a lot more money in the process. No more begging for vacation days and living from paycheck to
                    paycheck. After trying everything from e-commerce stores to professional poker his lucky break came when
                    he started freelance design. Vako fell in love with the field that gives him the lifestyle of his
                    dreams.
    
                    Vako realizes that people who take courses on Udemy want to transform their lives. Today with his
                    courses and mentoring Vako is helping thousands of people transform their lives, just like he did once.`

  }





  //============== Static section ================//
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


      

}

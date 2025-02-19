import { Component, NgZone, OnDestroy, OnInit,HostListener } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CategoryCardProps } from '../../../core/interfaces/CategoryCardProps.interface';
import { InstructorCardComponent } from "../instructor-card/instructor-card.component";
import { BecomeInstructorCardComponent } from "../become-instructor-card/become-instructor-card.component";
import { InstructorCardProps } from '../../../core/interfaces/InstuctorCardProps.interface';
import { CourseCardComponent } from "../course-card/course-card.component";
import { DetailedCourseCardProps } from '../../../core/interfaces/DetailedCourseCardProps.interface';
import { DetailedCourseCardComponent } from "../detailed-course-card/detailed-course-card.component";
import { RegularCourseCardComponent } from '../regular-course-card/regular-course-card.component';
import { HoveringCardService } from '../../services/hovering-card.service';
import { HoveringCourseCardComponent } from "../hovering-course-card/hovering-course-card.component";
import { log } from 'console';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CategoryCardComponent, InstructorCardComponent, BecomeInstructorCardComponent, CourseCardComponent, DetailedCourseCardComponent, RegularCourseCardComponent, HoveringCourseCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {


  topcategories: CategoryCardProps[] = [

    {
      iconUrl: '../../../assets/category_icons/computer-science-icon.png',
      title: 'Computer Science',
      colorCode: '#EBEBFF',
      courseCount: 63476
    },
    {
      iconUrl: '../../../assets/category_icons/business-icon.png',
      title: 'Business',
      colorCode: '#E1F7E3',
      courseCount: 52822
    },
    {
      iconUrl: '../../../assets/category_icons/finance-icon.png',
      title: 'Finance & Accounting',
      colorCode: '#FFF2E5',
      courseCount: 33841
    },
    {
      iconUrl: '../../../assets/category_icons/software-icon.png',
      title: 'IT & Software',
      colorCode: '#FFF0F0',
      courseCount: 22649
    },
    {
      iconUrl: '../../../assets/category_icons/development-icon.png',
      title: 'Personal Development',
      colorCode: '#FFFFFF',
      courseCount: 20126
    },
    {
      iconUrl: '../../../assets/category_icons/productivity-icon.png',
      title: 'Office Productivity',
      colorCode: '#FFC63CC4',
      courseCount: 13932
    },
    {
      iconUrl: '../../../assets/category_icons/marketing-icon.png',
      title: 'Marketing',
      colorCode: '#EBEBFF',
      courseCount: 12068
    },
    {
      iconUrl: '../../../assets/category_icons/photography-icon.png',
      title: 'Photography & Video',
      colorCode: '#FFC63CC4',
      courseCount: 6196
    },
    {
      iconUrl: '../../../assets/category_icons/lifestyle-icon.png',
      title: 'Lifestyle',
      colorCode: '#FFF2E5',
      courseCount: 12068
    },
    {
      iconUrl: '../../../assets/category_icons/design-icon.png',
      title: 'Design',
      colorCode: '#F7FBDE',
      courseCount: 2600
    },
    {
      iconUrl: '../../../assets/category_icons/health-icon.png',
      title: 'Health & Fitness',
      colorCode: '#E1F7E3',
      courseCount: 1678
    },
    {
      iconUrl: '../../../assets/category_icons/music-icon.png',
      title: 'Music',
      colorCode: '#FFF2E5',
      courseCount: 959
    }




  ]

   topInstructors: InstructorCardProps[] = [
    {
        name: 'Devon Lane',
        title: 'Senior Developer',
        imageUrl: './../../assets/instructor-asset/instructor1.png',
        rating: 4.6,
        students: 854
    },
    {
        name: 'Darnell Steward',
        title: 'Digital Product Designer',
        imageUrl: './../../assets/instructor-asset/instructor2.png', // Assuming similar image path
        rating: 4.9,
        students: 451444
    },
    {
        name: 'Jane Cooper',
        title: 'UI/UX Designer',
        imageUrl: './../../assets/instructor-asset/instructor3.png', // Assuming similar image path
        rating: 4.8,
        students: 435671
    },
    {
        name: 'Albert Flores',
        title: 'Adobe Instructor',
        imageUrl: './../../assets/instructor-asset/instructor4.png', // Assuming similar image path
        rating: 4.7,
        students: 511123
    },
    {
        name: 'Kathryn Murphy',
        title: 'Lead Developer',
        imageUrl: './../../assets/instructor-asset/instructor5.png', // Assuming similar image path
        rating: 4.2,
        students: 2711
    }
];

 featuredCourses: DetailedCourseCardProps[] = [
  {
    title: "Investing In Stocks The Complete Course! (13 H...)",
    category: "HEALTH & FITNESS",
    instructor: "Kevin Gilbert",
    instructorImageUrl: "../../../assets/instructor-asset/instructor1.png",
    price: 14.00,
    oldPrice: 26.00,
    rating: 5.0,
    reviewCount: 357914,
    enrolledStudents: 265700,
    difficultyLevel: "Beginner",
    duration: 6,
    imageUrl: "../../../assets/course-images/course-image.png"
  },
  {
    title: "Google Analytics Certification - Learn How To...",
    category: "PERSONAL DEVELOPMENT",
    instructor: "Kevin Gilbert",
    instructorImageUrl: "../../../assets/instructor-asset/instructor2.png",
    price: 14.00,
    oldPrice: 26.00,
    rating: 5.0,
    reviewCount: 357914,
    enrolledStudents: 265700,
    difficultyLevel: 'Intermediate',
    duration: 6,
    imageUrl: "../../../assets/course-images/course-image.png"
  },
  {
    title: "Adobe XD for Web Design: Essential Principles",
    category: "PRODUCTIVITY",
    instructor: "Kevin Gilbert",
    instructorImageUrl: "../../../assets/instructor-asset/instructor3.png",
    price: 14.00,
    oldPrice: 26.00,
    rating: 5.0,
    reviewCount: 357914,
    enrolledStudents: 265700,
    difficultyLevel: 'Expert',
    duration: 6,
    imageUrl: "../../../assets/course-images/course-image.png"
  },
  {
    title: "The Python Mega Course: Build 10 Real World ...",
    category: "MUSIC",
    instructor: "Kevin Gilbert",
    instructorImageUrl: "../../../assets/instructor-asset/instructor4.png",
    price: 14.00,
    oldPrice: 26.00,
    rating: 5.0,
    reviewCount: 357914,
    enrolledStudents: 265700,
    difficultyLevel:  'Intermediate',
    duration: 6,
    imageUrl: "../../../assets/course-images/course-image.png"
  }
];



  images: string[] = [
    "../../../assets/intro-images/intro1.jpeg",
    "../../../assets/intro-images/intro2.png",
    "../../../assets/intro-images/intro3.png",
    "../../../assets/intro-images/intro4.jpg",
    "../../../assets/intro-images/intro5.png"
  ];


  titles: string[] = [
    "Makes learning easier.",
    "Empower your future with learning.",
    "Unlock your potential with new skills.",
    "Transform the way you learn online.",
    "Discover the power of knowledge."
  ];

  descriptions: string[] = [
    "Our mission is to help people to find the best course online and learn with expert anytime, anywhere.",
    "Discover a smarter way to learn with expert-led courses tailored to your goals. Gain in-demand skills at your own pace, anytime, anywhere.",
    "Transform your career with industry-relevant courses designed by professionals. Join a global community of learners and instructors.",
    "Explore a vast collection of courses across multiple fields. Learn from top instructors and gain real-world knowledge to advance in your career.",
    "Flexible, affordable, and accessible learning for everyone. Master new skills with interactive courses and expert mentorship, all in one platform."
  ];

  currentImage: string = this.images[0];
  fullTitle: string = this.titles[0];
  fullDescription: string = this.descriptions[0];
  displayedTitle: string = "";
  displayedDescription: string = "";
  isFading: boolean = false;
  private imageIndex: number = 0;
  private intervalId: any;

  constructor(private ngZone: NgZone, public hoveringService: HoveringCardService) { } // Inject NgZone

  ngOnInit(): void {
    this.startImageRotation();
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up interval when component is destroyed
    }
  }

  private startImageRotation(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.isFading = true; // Start fade out

          setTimeout(() => {
            this.currentImage = ''; // Temporarily remove the image to prevent flickering


            setTimeout(() => {
              this.imageIndex = (this.imageIndex + 1) % this.images.length;
              this.currentImage = this.images[this.imageIndex]; // Load new image


              // Start typing the new title and description
              this.fullTitle = this.titles[this.imageIndex];
              this.fullDescription = this.descriptions[this.imageIndex];

              this.displayedTitle = ""; // Clear for retyping
              this.displayedDescription = ""; // Clear for retyping

              this.startTyping();

              this.isFading = false; // Fade in
            }, 100); // Small delay before showing the new image
          }, 500); // Ensure fade out completes before changing the image
        });
      }, 9000);
    });
  }

  private startTyping(): void {
    this.typeText(this.fullTitle, 'title', () => {
      this.typeText(this.fullDescription, 'description');
    });
  }

  private typeText(text: string, target: 'title' | 'description', callback?: () => void): void {
    let index = 0;
    const interval = setInterval(() => {
      if (target === 'title') {
        this.displayedTitle += text.charAt(index);
      } else {
        this.displayedDescription += text.charAt(index);
      }

      index++;
      if (index === text.length) {
        clearInterval(interval);
        if (callback) callback(); // Start typing the description after title is finished
      }
    }, 40); // Adjust speed of typing effect
  }


    // hovering card controllers

  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.pageX; // X position relative to viewport
    this.mouseY = event.pageY; // Y position relative to viewport
  }

  public outOfCourseCard:boolean = true;
  public outOfHoveringCard:boolean = true;

  mouseEnterCourseCard(event: MouseEvent){
    this.outOfCourseCard = false;

    this.ngZone.run(() => {setTimeout(() => {

       let x = this.mouseX - 10 ;
       let y = this.mouseY - 300
       // Offset for better positioning
      y = (event.screenY < 410)? y + (550 - event.screenY): (event.screenY > 750)? y - ( event.screenY - 650): y;
      x = (x > 1470)? x - 410: x;
      this.hoveringService.show(x, y);
    },300)});
  }
  mouseLeaveCourseCard(){

    this.outOfCourseCard = true;
    this.ngZone.run(() => {setTimeout(() => {
      if (this.outOfCourseCard && this.outOfHoveringCard) {
        this.hoveringService.hide();
      }
    },200)});  }

  mouseEnterHoveringCard(){
    this.outOfHoveringCard = false;
  }
  mouseLeaveHoveringCard(){
    this.outOfHoveringCard = true;
    this.ngZone.run(() => {setTimeout(() => {
      if (this.outOfCourseCard && this.outOfHoveringCard) {
        this.hoveringService.hide();
      }
    },200)});
  }
}

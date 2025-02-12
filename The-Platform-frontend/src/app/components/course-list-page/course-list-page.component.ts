import { Component, HostListener, NgZone } from '@angular/core';
import { CourseCardComponent } from "../course-card/course-card.component";
import { FilterBarComponent } from "../filter-bar/filter-bar.component";
import { CommonModule } from '@angular/common';
import { HoveringCardService } from '../../services/hovering-card.service';
import { HoveringCourseCardComponent } from "../hovering-course-card/hovering-course-card.component";
import { FilterProps } from '../../../core/interfaces/FilterProps.interface';
import { CourseCardProps } from '../../../core/interfaces/CourseCardProps.interface';

@Component({
  selector: 'app-course-list-page',
  standalone: true,
  imports: [CourseCardComponent, FilterBarComponent, CommonModule, HoveringCourseCardComponent],
  templateUrl: './course-list-page.component.html',
  styleUrl: './course-list-page.component.css'
})
export class CourseListPageComponent {

  constructor(private ngZone: NgZone, public hoveringService: HoveringCardService) { } // Inject NgZone

  filters: FilterProps = {


    selectedBoxes: 0,
    Development: [
      { name: 'Web Development', count: 1345, selected: false },
      { name: 'Data science', count: 12736, selected: false },
      { name: 'Mobile Development', count: 1345, selected: false },
      { name: 'Software Testing', count: 1345, selected: false },
      { name: 'Software Engineering', count: 1345, selected: false },
      { name: 'Software Development Tools', count: 1345, selected: false },
      { name: 'No-Code Development', count: 1345, selected: false },

    ],
    Business: [
      { name: 'Entrepreneurship', count: 1345, selected: false },
      { name: 'Business Strategy', count: 12736, selected: false },
      { name: 'Operations', count: 1345, selected: false },
      { name: 'Project Management', count: 1345, selected: false },
      { name: 'Business Law', count: 1345, selected: false },
      { name: 'Home Business', count: 1345, selected: false },
      { name: 'E-commerce', count: 1345, selected: false }],
    Finance: [
      { name: 'Accounting & Bookkeeping', count: 1345, selected: false },
      { name: 'Cryptocurrency & Blockchain', count: 12736, selected: false },
      { name: 'Investing & Trading', count: 1345, selected: false },
      { name: 'Financial Modeling', count: 1345, selected: false },
      { name: 'Taxes', count: 1345, selected: false },
      { name: 'Risk Management', count: 1345, selected: false },
      { name: 'Personal Finance', count: 1345, selected: false }
    ],
    It: [
      { name: 'IT Certification', count: 1345, selected: false },
      { name: 'Network & Security', count: 12736, selected: false },
      { name: 'Operating Systems', count: 1345, selected: false },
      { name: 'Cloud Computing', count: 1345, selected: false },
      { name: 'Software Engineering', count: 1345, selected: false },
      { name: 'Cybersecurity', count: 1345, selected: false },
      { name: 'Databases', count: 1345, selected: false }
    ],
    Productivity: [],
    PersonalDevelopment: [
      { name: 'Leadership', count: 1345, selected: false },
      { name: 'Personal Productivity', count: 12736, selected: false },
      { name: 'Career Development', count: 1345, selected: false },
      { name: 'Parenting & Relationships', count: 1345, selected: false },
      { name: 'Personal Finance', count: 1345, selected: false },
      { name: 'Memory & Study Skills', count: 1345, selected: false },
      { name: 'Happiness & Mindfulness', count: 1345, selected: false }
    ],
    Design: [
      { name: 'Graphic Design', count: 1345, selected: false },
      { name: 'User Experience Design', count: 12736, selected: false },
      { name: '3D & Animation', count: 1345, selected: false },
      { name: 'Web Design', count: 1345, selected: false },
      { name: 'Fashion Design', count: 1345, selected: false },
      { name: 'Interior Design', count: 1345, selected: false },
      { name: 'Design Thinking', count: 1345, selected: false }
    ],
    Marketing: [
      { name: 'Digital Marketing', count: 1345, selected: false },
      { name: 'SEO', count: 12736, selected: false },
      { name: 'Social Media Marketing', count: 1345, selected: false },
      { name: 'Email Marketing', count: 1345, selected: false },
      { name: 'Branding', count: 1345, selected: false },
      { name: 'Content Marketing', count: 1345, selected: false },
      { name: 'Advertising', count: 1345, selected: false }
    ],
    Lifestyle: [        { name: 'Health & Wellness', count: 1345, selected: false },
      { name: 'Travel', count: 12736, selected: false },
      { name: 'Gaming', count: 1345, selected: false },
      { name: 'Pet Care & Training', count: 1345, selected: false },
      { name: 'Beauty & Makeup', count: 1345, selected: false },
      { name: 'Home Improvement', count: 1345, selected: false },
      { name: 'Fashion & Style', count: 1345, selected: false }],
    Photography: [
      { name: 'Photography', count: 1345, selected: false },
      { name: 'Video Editing', count: 12736, selected: false },
      { name: 'Videography', count: 1345, selected: false },
      { name: 'Motion Graphics', count: 1345, selected: false },
      { name: 'DSLR Photography', count: 1345, selected: false },
      { name: 'Cinematography', count: 1345, selected: false },
      { name: 'Filmmaking', count: 1345, selected: false }
    ],
    Music: [
      { name: 'Music Production', count: 1345, selected: false },
      { name: 'Music Theory', count: 12736, selected: false },
      { name: 'Instruments', count: 1345, selected: false },
      { name: 'Vocal Training', count: 1345, selected: false },
      { name: 'DJing', count: 1345, selected: false },
      { name: 'Songwriting', count: 1345, selected: false },
      { name: 'Music Business', count: 1345, selected: false }
    ],
    Health: [
      { name: 'Nutrition', count: 1345, selected: false },
      { name: 'Yoga', count: 12736, selected: false },
      { name: 'Mental Health', count: 1345, selected: false },
      { name: 'Fitness', count: 1345, selected: false },
      { name: 'Weight Loss', count: 1345, selected: false },
      { name: 'Meditation', count: 1345, selected: false },
      { name: 'Sports', count: 1345, selected: false }
    ],
    tools: [
      { name: 'HTML 5', count: 1345, selected: false },
      { name: 'CSS 3', count: 12736, selected: false },
      { name: 'React', count: 1345, selected: false },
      { name: 'Webflow', count: 1345, selected: false },
      { name: 'Node.js', count: 1345, selected: false },
      { name: 'Laravel', count: 1345, selected: false },
      { name: 'Saas', count: 1345, selected: false },
      { name: 'Wordpress', count: 1345, selected: false }
    ],
    ratings: [
      { name: '5 Star', count: 1345, selected: false },
      { name: '4 Star & up', count: 12736, selected: false },
      { name: '3 Star & up', count: 545, selected: false },
      { name: '2 Star & up', count: 43, selected: false },
      { name: '1 Star & up', count: 23, selected: false }
    ],
    levels: [
      { name: 'All Level', count: 243, selected: false },
      { name: 'Beginner', count: 543, selected: false },
      { name: 'Intermediate', count: 234, selected: false },
      { name: 'Expert', count: 689, selected: false }
    ],
    durations: [
      { name: '6-12 Months', count: 243, selected: false },
      { name: '3-6 Months', count: 543, selected: false },
      { name: '1-3 Months', count: 234, selected: false },
      { name: '1-4 Weeks', count: 689, selected: false },
      { name: '1-7 Days', count: 689, selected: false },
    ]
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
    },
    {
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
    },
    {
      category: 'MARKETING',
      title: 'How to get Diamond in soloQ | League of Legends | Season 11',
      price: 23,
      rate: 4.7,
      enrolledStudents: 435671,
      courseImage: '../../../assets/course-images/c8.png'
    },
    {
      category: 'DESIGN',
      title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
      price: 13,
      rate: 4.6,
      enrolledStudents: 181811,
      courseImage: '../../../assets/course-images/c9.png'
    },
    {
      category: 'IT & SOFTWARE',
      title: 'SQL for NEWBS: Weekender Crash Course',
      price: 32,
      rate: 5.0,
      enrolledStudents: 451444,
      courseImage: '../../../assets/course-images/c10.png'
    },
    {
      category: 'DEVELOPMENTS',
      title: 'SEO 2021: Complete SEO Training + SEO for WordPress Websites',
      price: 24,
      rate: 5.0,
      enrolledStudents: 197637,
      courseImage: '../../../assets/course-images/c11.png'
    },
    {
      category: 'MARKETING',
      title: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2021',
      price: 9,
      rate: 5.0,
      enrolledStudents: 1356236,
      courseImage: '../../../assets/course-images/c12.png'
    },
    {
      category: 'DESIGN',
      title: 'Data Structures & Algorithms Essentials (2021)',
      price: 24,
      rate: 4.7,
      enrolledStudents: 451444,
      courseImage: '../../../assets/course-images/c13.png'
    },
    {
      category: 'IT & SOFTWARE',
      title: 'Complete Adobe Lightroom Megacourse: Beginner to Expert',
      price: 89,
      rate: 4.9,
      enrolledStudents: 511123,
      courseImage: '../../../assets/course-images/c14.png'
    },
    {
      category: 'DEVELOPMENTS',
      title: 'Digital Marketing Masterclass - 23 Courses in 1',
      price: 32,
      rate: 5.0,
      enrolledStudents: 211434,
      courseImage: '../../../assets/course-images/c15.png'
    },
    {
      category: 'DESIGN',
      title: 'Instagram Marketing 2021: Complete Guide To Instagram Growth',
      price: 16,
      rate: 4.5,
      enrolledStudents: 854,
      courseImage: '../../../assets/course-images/c16.png'
    },
    {
      category: 'IT & SOFTWARE',
      title: 'Automate the Boring Stuff with Python Programming',
      price: 9,
      rate: 4.5,
      enrolledStudents: 982941,
      courseImage: '../../../assets/course-images/c17.png'
    },
    {
      category: 'DEVELOPMENTS',
      title: 'Selenium WebDriver with Java -Basics to Advanced+Frameworks',
      price: 9,
      rate: 4.4,
      enrolledStudents: 154817,
      courseImage: '../../../assets/course-images/c18.png'
    },
    {
      category: 'MARKETING',
      title: 'iPhone Photography | Take Professional Photos On Your iPhone',
      price: 24,
      rate: 4.8,
      enrolledStudents: 211434,
      courseImage: '../../../assets/course-images/c19.png'
    },
    {
      category: 'DESIGN',
      title: 'Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates',
      price: 89,
      rate: 4.2,
      enrolledStudents: 2711,
      courseImage: '../../../assets/course-images/c20.png'
    },
    {
      category: 'IT & SOFTWARE',
      title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
      price: 24,
      rate: 4.7,
      enrolledStudents: 451444,
      courseImage: '../../../assets/course-images/c21.png'
    },
    {
      category: 'DEVELOPMENTS',
      title: '2021 Complete Python Bootcamp From Zero to Hero in Python',
      price: 35,
      rate: 3.5,
      enrolledStudents: 982941,
      courseImage: '../../../assets/course-images/c22.png'
    },
    {
      category: 'MARKETING',
      title: 'Premiere Pro CC for Beginners: Video Editing in Premiere',
      price: 24,
      rate: 4.8,
      enrolledStudents: 854,
      courseImage: '../../../assets/course-images/c23.png'
    }
  ];
  

  isDropdownOpen = false;
  isFilterActive = false;
  pages = [1, 2, 3, 4, 5];
  currentPage = this.pages[0]; // Active page (default: 1)
  

  filterToggle(){

    this.isFilterActive = !this.isFilterActive;

  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }







  selectPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
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

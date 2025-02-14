import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseInstructorCardComponent } from '../course-instructor-card/course-instructor-card.component';
import { CourseRatingComponent } from '../course-rating-card/course-rating.component';
import { RegularCourseCardComponent } from '../regular-course-card/regular-course-card.component';

import { CourseRatingProps } from '../../../core/interfaces/CourseRatingProps.interface';
import { CourseData } from '../../../core/interfaces/CourseData.interface';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { StudentReviewComponent } from "../student-review-card/student-review.component";


@Component({
  selector: 'app-course-details',
  standalone: true,

  imports: [CommonModule, CourseInstructorCardComponent, RegularCourseCardComponent, CourseRatingComponent, NumberFormatPipe, StudentReviewComponent],

  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {


    // <========== Data that will be obtained from the API Endpoint ==========================>

  courseData: CourseData = {
    courseTitle: 'Complete Website Responsive Design: from Figma to Webflow to Website Design',
    courseBrief: '3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.',
    creators:
      [
        {
          instrImg: '../../../assets/course-details/instr1.png',
          instName: 'Vako Shvili',
          instrTitle: 'Web Designer & Best-Selling Instructor',
          rateNum: 4.9,
          studentsNum: 236568,
          coursesNum: 9,
          about: 'One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed...'
        },
        {
          instrImg: '../../../assets/course-details/instr2.png',
          instName: 'Nima Tahami',
          instrTitle: 'Entrepreneur & Designer • Founder of ShiftRide',
          rateNum: 4.6,
          studentsNum: 5342,
          coursesNum: 1,
          about: "I'm an entrepreneur & designer with a high passion for building products of all sorts and seeing ideas come to life. As a serial entrepreneur, I've designed and built projects in fields ranging from fashion to technology. I have over 10 years of experience in both..."
        }
      ],
    courseRating: {
      overaRating: 4.8,
      reviewersCount: 451444,
      ratings: [
        { stars: 5, percent: 75 },
        { stars: 4, percent: 21 },
        { stars: 3, percent: 3 },
        { stars: 2, percent: 1 },
        { stars: 1, percent: 0.5 }
      ]
    },
    description: `      It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love
                        that feeling after I'm done working on something. When I lean back in my chair, look at the
                        final result with a smile, and have this little "spark joy" moment. It's especially satisfying
                        when I know I just made $5,000. 
                        I do! And that's why I got into this field. Not for the love of Web Design, which I do now. But
                        for the LIFESTYLE! There are many ways one can achieve this lifestyle. This is my way. This is
                        how I achieved a lifestyle I've been fantasizing about for five years. And I'm going to teach
                        you the same. Often people think Web Design is complicated. That it needs some creative talent
                        or knack for computers. Sure, a lot of people make it very complicated. People make the simplest
                        things complicated. Like most subjects taught in the universities. But I don't like complicated.
                        I like easy. I like life hacks. I like to take the shortest and simplest route to my
                        destination. I haven't gone to an art school or have a computer science degree. I'm an outsider
                        to this field who hacked himself into it, somehow ending up being a sought-after professional.
                        That's how I'm going to teach you Web Design. So you're not demotivated on your way with
                        needless complexity. So you enjoy the process because it's simple and fun. So you can become a
                        Freelance Web Designer in no time.
                        
                        <br></br>
                        For example, this is a Design course but I don't teach you Photoshop. Because Photoshop is
                        needlessly complicated for Web Design. But people still teach it to web designers. I don't. I
                        teach Figma – a simple tool that is taking over the design world. You will be designing a
                        complete website within a week while others are still learning how to create basic layouts in
                        Photoshop.
                        <br></br>

                        Second, this is a Development course. But I don't teach you how to code. Because for Web Design
                        coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow – a tool
                        that is taking over the web design world. You will be building complex websites within two weeks
                        while others are still learning the basics of HTML & CSS. Third, this is a Freelancing course.
                        But I don't just teach you how to write great proposals. I give you a winning proposal template.
                        When you're done with the course, you will have a stunning portfolio website with portfolio
                        pieces already in it. Buy this course now and take it whenever the time is right for you.`,
    learningItems: [
      `You will learn how to design beautiful websites using Figma, an interface design
        tool used by designers at Uber, Airbnb and Microsoft.`,
      `You will learn secret tips of Freelance Web Designers and how they make great
        money freelancing online.`,
      `Understand how to use both the Jupyter Notebook and create .py files`,
      `You will learn how to take your designs and build them into powerful websites
       using Webflow, a state of the art site builder used by teams at Dell, NASA and more.`,
      `Learn to use Python professionally, learning both Python 2 and Python 3!`,
      `Get an understanding of how to create GUIs in the Jupyter Notebook system!`,
    ],
    targetAudience: [
      `This course is for those who want to launch a Freelance Web Design career.`,
      `Praesent eget consequat elit. Duis a pretium purus.`,
      `Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.`,
      `Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.`,
      `Those who are looking to reboot their work life and try a new profession that is fun,
                                rewarding and highly in-demand.`,
      `Nunc auctor consequat lorem, in posuere enim hendrerit sed.`,
      `Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed
                                molestie.`,
    ],
    courseRequirements: [
      `Nunc auctor consequat lorem, in posuere enim hendrerit sed.`,
      `Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.`,
      `Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed
          molestie.`,
      `Those who are looking to reboot their work life and try a new profession that is fun,
          rewarding and highly in-demand.`,
      `Praesent eget consequat elit. Duis a pretium purus.`,
      `Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis
          ex.`,
      `This course is for those who want to launch a Freelance Web Design career.`
    ],
    curriculum: {

      modulesCount: 6,
      totalLecturesCount: 202,
      totalCourseTime: { hours: 19, minutes: 37 },
      modules: [
        {
          moduleTitle: 'Getting Started',
          lecturesCount: 5,
          moduleTime: { hours: 0, minutes: 51 },
          lectures: [
            { lectureTitle: "What’s is Webflow?", lectureTime: { hours: 0, minutes: 7 }, lectureType: 'watchable' },
            { lectureTitle: "Sign up in Webflow", lectureTime: { hours: 0, minutes: 10 }, lectureType: 'watchable' },
            { lectureTitle: "Webflow Terms & Conditions", lectureTime: { hours: 0, minutes: 15 }, lectureType: 'readable' },
            { lectureTitle: "Teaser of Webflow", lectureTime: { hours: 0, minutes: 5 }, lectureType: 'watchable' },
            { lectureTitle: "Practice Project", lectureTime: { hours: 0, minutes: 14 }, lectureType: 'readable' }
          ]
        },
        {
          moduleTitle: 'Understanding UI/UX Principles',
          lecturesCount: 6,
          moduleTime: { hours: 1, minutes: 20 },
          lectures: [
            { lectureTitle: "Introduction to UI & UX", lectureTime: { hours: 0, minutes: 10 }, lectureType: 'watchable' },
            { lectureTitle: "User Psychology & Behavior", lectureTime: { hours: 0, minutes: 12 }, lectureType: 'readable' },
            { lectureTitle: "Design Thinking Process", lectureTime: { hours: 0, minutes: 15 }, lectureType: 'watchable' },
            { lectureTitle: "Figma vs. Other Design Tools", lectureTime: { hours: 0, minutes: 18 }, lectureType: 'watchable' },
            { lectureTitle: "Common UI Mistakes to Avoid", lectureTime: { hours: 0, minutes: 10 }, lectureType: 'readable' },
            { lectureTitle: "Wireframing Basics", lectureTime: { hours: 0, minutes: 15 }, lectureType: 'watchable' }
          ]
        },
        {
          moduleTitle: 'Figma Basics & Interface Overview',
          lecturesCount: 5,
          moduleTime: { hours: 1, minutes: 5 },
          lectures: [
            { lectureTitle: "Getting Started with Figma", lectureTime: { hours: 0, minutes: 10 }, lectureType: 'watchable' },
            { lectureTitle: "Figma UI & Navigation", lectureTime: { hours: 0, minutes: 12 }, lectureType: 'watchable' },
            { lectureTitle: "Working with Frames & Artboards", lectureTime: { hours: 0, minutes: 14 }, lectureType: 'watchable' },
            { lectureTitle: "Using Figma Components & Assets", lectureTime: { hours: 0, minutes: 16 }, lectureType: 'watchable' },
            { lectureTitle: "Collaborating in Figma", lectureTime: { hours: 0, minutes: 13 }, lectureType: 'readable' }
          ]
        },
        {
          moduleTitle: 'Advanced Figma Techniques',
          lecturesCount: 6,
          moduleTime: { hours: 1, minutes: 30 },
          lectures: [
            { lectureTitle: "Creating Reusable Components", lectureTime: { hours: 0, minutes: 15 }, lectureType: 'watchable' },
            { lectureTitle: "Auto Layout & Constraints", lectureTime: { hours: 0, minutes: 14 }, lectureType: 'watchable' },
            { lectureTitle: "Interactive Prototyping", lectureTime: { hours: 0, minutes: 18 }, lectureType: 'watchable' },
            { lectureTitle: "Responsive Design in Figma", lectureTime: { hours: 0, minutes: 16 }, lectureType: 'watchable' },
            { lectureTitle: "Using Plugins & Extensions", lectureTime: { hours: 0, minutes: 12 }, lectureType: 'readable' },
            { lectureTitle: "Exporting Assets & Handoff for Developers", lectureTime: { hours: 0, minutes: 15 }, lectureType: 'readable' }
          ]
        },
        {
          moduleTitle: 'Designing a Full Website in Figma',
          lecturesCount: 6,
          moduleTime: { hours: 2, minutes: 5 },
          lectures: [
            { lectureTitle: "Project Setup & Planning", lectureTime: { hours: 0, minutes: 18 }, lectureType: 'readable' },
            { lectureTitle: "Creating a Landing Page", lectureTime: { hours: 0, minutes: 22 }, lectureType: 'watchable' },
            { lectureTitle: "Designing Navigation & Footer", lectureTime: { hours: 0, minutes: 20 }, lectureType: 'watchable' },
            { lectureTitle: "Building a Blog or Portfolio Section", lectureTime: { hours: 0, minutes: 25 }, lectureType: 'watchable' },
            { lectureTitle: "Making Interactive Prototypes", lectureTime: { hours: 0, minutes: 18 }, lectureType: 'watchable' },
            { lectureTitle: "Finalizing & Presenting the Design", lectureTime: { hours: 0, minutes: 22 }, lectureType: 'readable' }
          ]
        },
        {
          moduleTitle: 'Deploying & Handoff for Development',
          lecturesCount: 5,
          moduleTime: { hours: 1, minutes: 15 },
          lectures: [
            { lectureTitle: "Understanding Design Handoff", lectureTime: { hours: 0, minutes: 12 }, lectureType: 'readable' },
            { lectureTitle: "Preparing Design for Webflow", lectureTime: { hours: 0, minutes: 18 }, lectureType: 'watchable' },
            { lectureTitle: "Handing Off to Developers", lectureTime: { hours: 0, minutes: 15 }, lectureType: 'watchable' },
            { lectureTitle: "Testing & Refining the Design", lectureTime: { hours: 0, minutes: 20 }, lectureType: 'watchable' },
            { lectureTitle: "Publishing the Final Project", lectureTime: { hours: 0, minutes: 10 }, lectureType: 'readable' }
          ]
        }
      ]
    },

    studentsReviews : [
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
      },]

  }










  // <=========================== static sectoin ==========================>

  watchableIcon = "../../../assets/course-details/svg/Play.svg";
  readableIcon = "../../../assets/course-details/svg/File.svg";

  activeTab: string = 'overview';

  tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'curriculum', name: 'Curriculum' },
    { id: 'instructor', name: 'Instructor' },
    { id: 'review', name: 'Review' }
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    // Scroll to the section
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Track open modules
  openModules: boolean[] = [];

  constructor() {
    this.openModules = new Array(this.courseData.curriculum.modules.length).fill(false);
  }

  toggleModule(index: number): void {
    this.openModules[index] = !this.openModules[index]; // Toggle the state
  }
}

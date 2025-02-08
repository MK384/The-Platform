import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CategoryCardProps } from '../../../core/interfaces/CategoryCardProps.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CategoryCardComponent],
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

  constructor(private ngZone: NgZone) { } // Inject NgZone

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

}

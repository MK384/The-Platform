import { Component } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CategoryCardProps } from '../../../core/interfaces/CategoryCardProps.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  topcategories:CategoryCardProps[] = [

    {
      iconUrl: '../../../assets/category_icons/computer-science-icon.png',
      title: 'Computer Science',
      colorCode: '#EBEBFF',
      courseCount: '63,476'
    },
    {
      iconUrl: '../../../assets/category_icons/business-icon.png',
      title: 'Business',
      colorCode: '#E1F7E3',
      courseCount: '52,822'
    },
    {
      iconUrl: '../../../assets/category_icons/finance-icon.png',
      title: 'Finance & Accounting',
      colorCode: '#FFF2E5',
      courseCount: '33,841'
    },
    {
      iconUrl: '../../../assets/category_icons/software-icon.png',
      title: 'IT & Software',
      colorCode: '#FFF0F0',
      courseCount: '22,649'
    },
    {
      iconUrl: '../../../assets/category_icons/development-icon.png',
      title: 'Personal Development',
      colorCode: '#FFFFFF',
      courseCount: '20,126'
    },
    {
      iconUrl: '../../../assets/category_icons/productivity-icon.png',
      title: 'Office Productivity',
      colorCode: '#FFC63CC4',
      courseCount: '13,932'
    },
    {
      iconUrl: '../../../assets/category_icons/marketing-icon.png',
      title: 'Marketing',
      colorCode: '#EBEBFF',
      courseCount: '12,068'
    },
    {
      iconUrl: '../../../assets/category_icons/photography-icon.png',
      title: 'Photography & Video',
      colorCode: '#FFC63CC4',
      courseCount: '6,196'
    },
    {
      iconUrl: '../../../assets/category_icons/lifestyle-icon.png',
      title: 'Lifestyle',
      colorCode: '#FFF2E5',
      courseCount: '12,068'
    },
    {
      iconUrl: '../../../assets/category_icons/design-icon.png',
      title: 'Design',
      colorCode: '#F7FBDE',
      courseCount: '2,600'
    },
    {
      iconUrl: '../../../assets/category_icons/health-icon.png',
      title: 'Health & Fitness',
      colorCode: '#E1F7E3',
      courseCount: '1,678'
    },
    {
      iconUrl: '../../../assets/category_icons/music-icon.png',
      title: 'Music',
      colorCode: '#FFF2E5',
      courseCount: '959'
    }




  ]

}

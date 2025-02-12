import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {

  isCategoryDroppedDown = true;
  isToolsDroppedDown = true;
  isRatingDroppedDown = true;
  isLevelDroppedDown = true;
  isPriceDroppedDown = true;
  isDurationDroppedDown = true;


  categories = [

    { category : "Development",
       dropped: false,
        sub:[
      { name: 'Web Development', count: 1345, selected: false },
      { name: 'Data science', count: 12736, selected: false },
      { name: 'Mobile Development', count: 1345, selected: false },
      { name: 'Software Testing', count: 1345, selected: false },
      { name: 'Software Engineering', count: 1345, selected: false },
      { name: 'Software Development Tools', count: 1345, selected: false },
      { name: 'No-Code Development', count: 1345, selected: false },
  
    ]},
    { 
      category: "Business", 
      dropped: false, 
      sub: [
        { name: 'Entrepreneurship', count: 1345, selected: false },
        { name: 'Business Strategy', count: 12736, selected: false },
        { name: 'Operations', count: 1345, selected: false },
        { name: 'Project Management', count: 1345, selected: false },
        { name: 'Business Law', count: 1345, selected: false },
        { name: 'Home Business', count: 1345, selected: false },
        { name: 'E-commerce', count: 1345, selected: false }
      ]
    },
    { 
      category: "Finance & Accounting", 
      dropped: false, 
      sub: [
        { name: 'Accounting & Bookkeeping', count: 1345, selected: false },
        { name: 'Cryptocurrency & Blockchain', count: 12736, selected: false },
        { name: 'Investing & Trading', count: 1345, selected: false },
        { name: 'Financial Modeling', count: 1345, selected: false },
        { name: 'Taxes', count: 1345, selected: false },
        { name: 'Risk Management', count: 1345, selected: false },
        { name: 'Personal Finance', count: 1345, selected: false }
      ]
    },
    { 
      category: "IT & Software", 
      dropped: false, 
      sub: [
        { name: 'IT Certification', count: 1345, selected: false },
        { name: 'Network & Security', count: 12736, selected: false },
        { name: 'Operating Systems', count: 1345, selected: false },
        { name: 'Cloud Computing', count: 1345, selected: false },
        { name: 'Software Engineering', count: 1345, selected: false },
        { name: 'Cybersecurity', count: 1345, selected: false },
        { name: 'Databases', count: 1345, selected: false }
      ]
    },
    { 
      category: "Office Productivity", 
      dropped: false, 
      sub: [
        { name: 'Microsoft Office', count: 1345, selected: false },
        { name: 'Google Workspace', count: 12736, selected: false },
        { name: 'Productivity Tools', count: 1345, selected: false },
        { name: 'SAP', count: 1345, selected: false },
        { name: 'QuickBooks', count: 1345, selected: false },
        { name: 'Email Productivity', count: 1345, selected: false },
        { name: 'Business Software', count: 1345, selected: false }
      ]
    },
    { 
      category: "Personal Development", 
      dropped: false, 
      sub: [
        { name: 'Leadership', count: 1345, selected: false },
        { name: 'Personal Productivity', count: 12736, selected: false },
        { name: 'Career Development', count: 1345, selected: false },
        { name: 'Parenting & Relationships', count: 1345, selected: false },
        { name: 'Personal Finance', count: 1345, selected: false },
        { name: 'Memory & Study Skills', count: 1345, selected: false },
        { name: 'Happiness & Mindfulness', count: 1345, selected: false }
      ]
    },
    { 
      category: "Design", 
      dropped: false, 
      sub: [
        { name: 'Graphic Design', count: 1345, selected: false },
        { name: 'User Experience Design', count: 12736, selected: false },
        { name: '3D & Animation', count: 1345, selected: false },
        { name: 'Web Design', count: 1345, selected: false },
        { name: 'Fashion Design', count: 1345, selected: false },
        { name: 'Interior Design', count: 1345, selected: false },
        { name: 'Design Thinking', count: 1345, selected: false }
      ]
    },
    { 
      category: "Marketing", 
      dropped: false, 
      sub: [
        { name: 'Digital Marketing', count: 1345, selected: false },
        { name: 'SEO', count: 12736, selected: false },
        { name: 'Social Media Marketing', count: 1345, selected: false },
        { name: 'Email Marketing', count: 1345, selected: false },
        { name: 'Branding', count: 1345, selected: false },
        { name: 'Content Marketing', count: 1345, selected: false },
        { name: 'Advertising', count: 1345, selected: false }
      ]
    },
    { 
      category: "Lifestyle", 
      dropped: false, 
      sub: [
        { name: 'Health & Wellness', count: 1345, selected: false },
        { name: 'Travel', count: 12736, selected: false },
        { name: 'Gaming', count: 1345, selected: false },
        { name: 'Pet Care & Training', count: 1345, selected: false },
        { name: 'Beauty & Makeup', count: 1345, selected: false },
        { name: 'Home Improvement', count: 1345, selected: false },
        { name: 'Fashion & Style', count: 1345, selected: false }
      ]
    },
    { 
      category: "Photography & Video", 
      dropped: false, 
      sub: [
        { name: 'Photography', count: 1345, selected: false },
        { name: 'Video Editing', count: 12736, selected: false },
        { name: 'Videography', count: 1345, selected: false },
        { name: 'Motion Graphics', count: 1345, selected: false },
        { name: 'DSLR Photography', count: 1345, selected: false },
        { name: 'Cinematography', count: 1345, selected: false },
        { name: 'Filmmaking', count: 1345, selected: false }
      ]
    },
    { 
      category: "Music", 
      dropped: false, 
      sub: [
        { name: 'Music Production', count: 1345, selected: false },
        { name: 'Music Theory', count: 12736, selected: false },
        { name: 'Instruments', count: 1345, selected: false },
        { name: 'Vocal Training', count: 1345, selected: false },
        { name: 'DJing', count: 1345, selected: false },
        { name: 'Songwriting', count: 1345, selected: false },
        { name: 'Music Business', count: 1345, selected: false }
      ]
    },
    { 
      category: "Health & Fitness", 
      dropped: false, 
      sub: [
        { name: 'Nutrition', count: 1345, selected: false },
        { name: 'Yoga', count: 12736, selected: false },
        { name: 'Mental Health', count: 1345, selected: false },
        { name: 'Fitness', count: 1345, selected: false },
        { name: 'Weight Loss', count: 1345, selected: false },
        { name: 'Meditation', count: 1345, selected: false },
        { name: 'Sports', count: 1345, selected: false }
      ]
    }
  ];
  
  
  tools = [
    { name: 'HTML 5', count: 1345, selected: false },
    { name: 'CSS 3', count: 12736, selected: false },
    { name: 'React', count: 1345, selected: false },
    { name: 'Webflow', count: 1345, selected: false },
    { name: 'Node.js', count: 1345, selected: false },
    { name: 'Laravel', count: 1345, selected: false },
    { name: 'Saas', count: 1345, selected: false },
    { name: 'Wordpress', count: 1345, selected: false }
  ];


  ratings = [
    { name: '5 Star', count: 1345, selected: false },
    { name: '4 Star & up', count: 12736, selected: false },
    { name: '3 Star & up', count: 545, selected: false },
    { name: '2 Star & up', count: 43, selected: false },
    { name: '1 Star & up.js', count: 23, selected: false }
  ];

  
  levels = [
    { name: 'All Level', count: 243, selected: false },
    { name: 'Beginner', count: 543, selected: false },
    { name: 'Intermediate', count: 234, selected: false },
    { name: 'Expert', count: 689, selected: false }
  ];


  durations = [
    { name: '6-12 Months', count: 243, selected: false },
    { name: '3-6 Months', count: 543, selected: false },
    { name: '1-3 Months', count: 234, selected: false },
    { name: '1-4 Weeks', count: 689, selected: false },
    { name: '1-7 Days', count: 689, selected: false },
  ];

  



  toggleSelection(option: any) {
    option.selected = !option.selected;
  }

}

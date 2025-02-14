import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {WatchCourseCardComponent} from "../watch-course-card/watch-course-card.component";
import {PaginationBarComponent} from "../pagination-bar/pagination-bar.component";
import {UserInstructorCardComponent} from "../user-instructor-card/user-instructor-card.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, WatchCourseCardComponent, PaginationBarComponent, UserInstructorCardComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input() user = {
    name: 'Kevin Gilbert',
    profileImage: '../../../assets/user.png',
    role: 'Web Designer & Best-Selling Instructor'
  };


  activeTab: string = 'dashboard';
  tabs = [
    {id: 'dashboard', name: 'Dashboard'},
    {id: 'courses', name: 'Courses'},
    {id: 'teachers', name: 'Teachers'},
    {id: 'message', name: 'Message'},
    {id: 'wishlist', name: 'Wishlist'},
    {id: 'purchase', name: 'Purchase History'},
    {id: 'settings', name: 'Settings'},

  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    // Scroll to the section
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  applyFilters() {

    // logic to filter courses dynamically
  }


}

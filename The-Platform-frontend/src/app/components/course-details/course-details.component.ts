import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseInstractotCardComponent } from '../course-instractot-card/course-instractot-card.component';
import { CourseRetingComponent } from '../course-reting/course-reting.component';
import { SendFeedbackComponent } from '../send-feedback/send-feedback.component';
import { RegularCourseCardComponent } from '../regular-course-card/regular-course-card.component';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, CourseInstractotCardComponent, CourseInstractotCardComponent, CourseRetingComponent, SendFeedbackComponent,RegularCourseCardComponent,AccordionComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  activeTab: string = 'Overview';
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
}

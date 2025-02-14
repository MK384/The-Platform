import { Component } from '@angular/core';
import { AccordionComponent } from "../accordion/accordion.component";
import { VideoDetailsComponent } from '../video-details/video-details.component';
import { CommonModule } from '@angular/common';
import { CommentReplyComponent } from "../comment-reply/comment-reply.component";
import { Comment } from '../../../core/interfaces/Comment.interface';

@Component({
  selector: 'app-watch-course',
  standalone: true,
  imports: [AccordionComponent, VideoDetailsComponent, CommonModule, CommentReplyComponent,CommentReplyComponent],
  templateUrl: './watch-course.component.html',
  styleUrl: './watch-course.component.css'
})
export class WatchCourseComponent {
  activeTab: string = 'Description';
  tabs = [
    { id: 'description', name: 'Description' },
    { id: 'lectures-notes', name: 'Lectures Notes' },
    { id: 'attach-file', name: 'Attach File' },
    { id: 'comments', name: 'Comments' }
  ];
  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    // Scroll to the section
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // Comment-reply component
  comments: Comment[] = [
    {
      id: 1,
      userName: "Ronald Richards",
      userImage: "../../../assets/watch-course/Avatar(4).png",
      time: "1 week ago",
      text: "Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.",
      replies: [
        {
          id: 2,
          userName: "Kristin Watson",
          userImage: "../../../assets/watch-course/Avatar(3).png",
          time: "1 week ago",
          text: "Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum. Morbi ultricies volutpat orci quis fringilla.",
          isAdmin: true
        },
        {
          id: 3,
          userName: "Cody Fisher",
          userImage: "../../../assets/watch-course/Avatar(2).png",
          time: "1 week ago",
          text: "Thank You so much sir, you’re a great mentor. 🔥🔥🔥"
        }
      ]
    }
  ];


}

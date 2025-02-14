import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  accordionTopics = [
    { title: "What’s is Webflow?", duration: "07:31", icon: "../../../assets/course-details/svg/Play.svg" },
    { title: "Sign up in Webflow", duration: "07:31", icon: "../../../assets/course-details/svg/Play.svg" },
    { title: "Webflow Terms & Conditions", duration: "5.3 MB", icon: "../../../assets/course-details/svg/File.svg" },
    { title: "Teaser of Webflow", duration: "07:31", icon: "../../../assets/course-details/svg/Play.svg" },
    { title: "Practice Project", duration: "5.3 MB", icon: "../../../assets/course-details/svg/File.svg" }
  ];

}

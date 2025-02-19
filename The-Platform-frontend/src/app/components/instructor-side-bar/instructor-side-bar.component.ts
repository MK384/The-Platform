import {Component, output, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-instructor-side-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './instructor-side-bar.component.html',
  styleUrl: './instructor-side-bar.component.css'
})
export class InstructorSideBarComponent {

 pages = {
    dashboard:true,
    newCourse:false,
    myCourses:false,
    earnings:false,
    messages:false,
    settings:false

  }

  pageChange = output<any>()


  activatePage(page: string | number): void {

    // @ts-ignore
    for (let p: boolean in this.pages) {
      // @ts-ignore
      if (p) {
        // @ts-ignore
        this.pages[p] = false;
      }
    }
    // @ts-ignore
    (this.pages)[page] = true;
    this.pageChange.emit(this.pages);
  }
}

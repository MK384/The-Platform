import { Component } from '@angular/core';
import {DecimalPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-pagination-bar',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass
  ],
  templateUrl: './pagination-bar.component.html',
  styleUrl: './pagination-bar.component.css'
})
export class PaginationBarComponent {


  pages = [1, 2, 3, 4, 5];
  currentPage = this.pages[0]; // Active page (default: 1)


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
}


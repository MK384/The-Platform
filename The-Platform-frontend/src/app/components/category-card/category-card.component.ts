import { Component, Input } from '@angular/core';
import { CategoryCardProps } from '../../../core/interfaces/CategoryCardProps.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  @Input() card!:CategoryCardProps;

}

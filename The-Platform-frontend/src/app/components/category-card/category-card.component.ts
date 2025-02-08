import { Component, Input } from '@angular/core';
import { CategoryCardProps } from '../../../core/interfaces/CategoryCardProps.interface';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, NumberFormatPipe],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  @Input() card!:CategoryCardProps;

}

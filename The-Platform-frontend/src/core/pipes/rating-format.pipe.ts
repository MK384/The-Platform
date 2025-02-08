import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingFormat',
  standalone: true // Enables usage in standalone components
})
export class RatingFormatPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) return '0.0';
    return value.toFixed(1); // Rounds to 1 decimal place (e.g., 4.87 → 4.9)
  }
}

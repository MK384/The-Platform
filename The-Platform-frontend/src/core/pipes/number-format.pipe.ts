import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true // Enables direct usage in standalone components
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (!value && value !== 0) return ''; // Handle invalid values
    return value.toLocaleString('en-US'); // Format with commas
  }
}
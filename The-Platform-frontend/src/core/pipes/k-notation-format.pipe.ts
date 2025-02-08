import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kNotationFormat',
  standalone: true // Enables usage in standalone components
})
export class KNotationFormatPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) return '0';
    
    if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return value.toString(); // Return as is if less than 1000
  }
}

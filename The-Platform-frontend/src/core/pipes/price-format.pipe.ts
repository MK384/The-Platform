import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone: true // Enables direct usage in standalone components
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number | null | undefined, currencySymbol: string = '$'): string {
    if (value === null || value === undefined) return `${currencySymbol}0.00`;
    return `${currencySymbol}${value.toFixed(2)}`; // Formats to two decimal places (e.g., 14 → $14.00)
  }
}

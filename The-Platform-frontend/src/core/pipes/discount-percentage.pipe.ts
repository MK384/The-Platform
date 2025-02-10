import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPercentage',
  standalone: true
})
export class DiscountPercentagePipe implements PipeTransform {

  transform(currentPrice: number, oldPrice: number): string {
    if (!oldPrice || oldPrice <= 0 || currentPrice < 0) {
      return 'Invalid price';
    }
    
    const discount = ((oldPrice - currentPrice) / oldPrice) * 100;
    return `${Math.round(discount)}%`;
  }
}

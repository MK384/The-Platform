import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckOutPageComponent {


  // Header Section
  @Input() title: string = 'Checkout';
  @Input() breadcrumbs: { name: string, link?: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'Shopping Cart', link: '/cart' },
    { name: 'Checkout' }
  ];



  // Payment Method
  selectedPayment: string = 'new'; // Tracks selected payment method
  rememberCard: boolean = true; // Checkbox for saving card

  paymentMethods = [
    { type: 'Visa', lastDigits: '4855', expiry: '04/24', owner: 'Vako Shvili', icon: '../../../assets/buy-course-icons/visa-icon.png' },
    { type: 'Mastercard', lastDigits: '5795', expiry: '04/24', owner: 'Vako Shvili', icon: '../../../assets/buy-course-icons/mastercard-icon.png' },
    { type: 'PayPal', description: 'You will be redirected to the PayPal site after reviewing your order.', icon: '../../../assets/buy-course-icons/paypal-icon.png' }
  ];

  selectPayment(method: string) {
    this.selectedPayment = method;
  }

  toggleRememberCard() {
    this.rememberCard = !this.rememberCard;
  }


  // Payment Complete
  courses = [{
    image: '../../../assets/course-images/c1.png',
    title: 'Graphic Design Masterclass - Learn GREAT Design',
    instructor: 'Courtney Henry',
    price: 13.00
  },
  {
    image: '../../../assets/course-images/c2.png',
    title: 'Graphic Design Masterclass - Learn GREAT Design',
    instructor: 'Courtney Henry',
    price: 25.00
  }];

  orderSummary = {
    subtotal: 61.97,
    discount: 8, // Percentage
    total: 75.00
  };

  completePayment() {
    alert('Payment Completed Successfully!');
  }
}

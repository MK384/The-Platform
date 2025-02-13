import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-course-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-course-page.component.html',
  styleUrl: './buy-course-page.component.css'
})
export class BuyCoursePageComponent {


  // Header Section
  @Input() title: string = 'Checkout Your Courses';
  @Input() breadcrumbs: { name: string, link?: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'Course', link: '/course' },
    { name: 'Complete Web Design', link:'/course/:id' },
    { name: 'Buy Course' }
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

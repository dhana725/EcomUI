import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 19999,
      image: 'assets/images/phone.jpg'
    },
    {
      id: 2,
      name: 'Headphones',
      price: 2999,
      image: 'assets/images/headphones.jpg'
    },
    {
      id: 3,
      name: 'Smartwatch',
      price: 5999,
      image: 'assets/images/watch.jpg'
    }
  ];
}

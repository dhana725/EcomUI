import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from "../product/product.component";
import { CategoryComponent } from "../category/category.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  imports: [NgbModule, CommonModule, ProductComponent, CategoryComponent,NavbarComponent,SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    './assets/banner2.jpg',
    './assets/banner.jpg',
  ];
}

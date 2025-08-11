import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(public pservice:ProductService){}
  products:any=[];
error:any;

    


ngOnInit(){
  this.getProductList();
}

getProductList(){
  this.pservice.getProductAsync().subscribe({next:(data)=>{
    this.products=data
    console.log(this.products)
  },error:(err)=>{
    this.error = err.message;
    console.log(this.error);
  }})
}
}

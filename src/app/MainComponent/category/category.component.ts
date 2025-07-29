import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  CategoryList:any=[];
  error:any;
  constructor(private cservice:CategoryService){}
  ngOnInit(){
    this.getCategoryList();
  }

  getCategoryList(){
    this.cservice.GetCategoryAsync().subscribe({next:(data)=>{
      this.CategoryList=data
    },error:(err)=>{
      this.error = err.message;
      console.log(this.error);
    }})
  }
}

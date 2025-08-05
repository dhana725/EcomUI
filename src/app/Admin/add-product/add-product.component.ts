import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categoryList:any;
  selectedImageItems:any;
  selectedProductImage:any=[];
 constructor(private cservice: CategoryService,private pservice: ProductService,private toastr: ToastrService){}
  productForm!: FormGroup;
  selectedFile!: File;
  error: any;
  ngOnInit() {
    this.getCategory()

    this.productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productImage: new FormControl(null, Validators.required),
      categoryId: new FormControl(0, Validators.required),
      productPrice: new FormControl('', Validators.required),
      

    })
  }
  onSubmit(form: any) {
    
    if (this.productForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('Name', this.productForm.value.productName);
      formData.append('Price', this.productForm.value.productPrice);
      formData.append('CategoryId', this.productForm.value.categoryId);
      formData.append('Image', this.selectedFile);
      this.selectedProductImage.forEach((item: any, index: number) => {
        formData.append(`SubImages[${index}].Image`, item.img[0]); // assuming img is an array of files
        formData.append(`SubImages[${index}].ImgOrder`, item.imgOrder.toString());
      });
      this.pservice.uploadProductAsync(formData).subscribe({
        next: (data:any) => {
          this.productForm.reset()
          this.toastr.success(data.message);        
        }, error: (err) => {
          this.error = err.message;
          this.toastr.error(this.error);
    
        }
      })
    }

  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }
  getCategory(){
    this.cservice.GetCategoryAsync().subscribe({next:(data:any)=>{
      console.log(data);
      this.categoryList= data;
      this.productForm.patchValue({
        categoryId: this.categoryList[0].categoryId
      });
    },error:(err)=>{
    console.log(err)
    }})
  }
  onFileChange(event: any) {
    const files: File[] = Array.from(event.target.files);
    this.selectedImageItems = files;
    console.log( this.selectedImageItems)
  }
  add(order:any){
let obj = {'img':this.selectedImageItems,"imgOrder":parseInt(order)}

this.selectedProductImage.push(obj);
console.log(this.selectedProductImage)
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcategory',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  constructor(private cservice: CategoryService,private toastr: ToastrService) { }
  categoryForm!: FormGroup;
  selectedFile!: File;
  error: any;
  ngOnInit() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', Validators.required),
      categoryImage: new FormControl(null, Validators.required),
    })
  }
  onSubmit(formData: any) {
    if (this.categoryForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.categoryForm.value.categoryName);
      formData.append('image', this.selectedFile);
      console.log(this.selectedFile)
      this.cservice.uploadCategoryAsync(formData).subscribe({
        next: (data:any) => {
          this.categoryForm.reset()
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

}

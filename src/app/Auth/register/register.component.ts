import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm!: FormGroup;

  constructor(public aservice:AuthService,private toastr: ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      this.aservice.RegisterAsync(this.registrationForm.value).subscribe({next:(data:any)=>{
        this.toastr.success(data.message); 
        this.route.navigate(['/login']);

      },error:(err)=>{
        this.toastr.error(err.message); 
      console.log(err)
      }})
      // Here you would typically send the data to a backend service
    } else {
      console.log('Form is invalid.');
      // Mark all fields as touched to display validation messages
      this.registrationForm.markAllAsTouched();
    }
  }
   
}

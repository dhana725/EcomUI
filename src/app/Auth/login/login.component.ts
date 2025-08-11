import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm!: FormGroup;

  constructor(public aservice:AuthService,private toastr: ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.LoginForm.valid) {
      console.log('Form Submitted!', this.LoginForm.value);
      this.aservice.LoginAsync(this.LoginForm.value).subscribe({next:(data:any)=>{
        localStorage.setItem('token', data.message); 
        this.toastr.success('Login Successfull'); 
 this.route.navigate(['/'])

      },error:(err)=>{
        this.toastr.error(err.error.message); 
      console.log(err)
      }})
      // Here you would typically send the data to a backend service
    } else {
      console.log('Form is invalid.');
      // Mark all fields as touched to display validation messages
      this.LoginForm.markAllAsTouched();
    }
  }
}

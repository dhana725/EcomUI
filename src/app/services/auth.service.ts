import { Injectable } from '@angular/core';
import { environment } from '../../environment.ts/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  RegisterAsync(data:any){
   return this.http.post(`${this.baseUrl+'Auth/register'}`,data);
}
LoginAsync(data:any){
  return this.http.post(`${this.baseUrl+'Auth/login'}`,data);
}
}

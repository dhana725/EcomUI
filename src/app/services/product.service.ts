import { Injectable } from '@angular/core';
import { environment } from '../../environment.ts/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// do NOT set Content-Type
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  uploadProductAsync(data:any){
    const headers = new HttpHeaders(); 
    return this.http.post(`${this.baseUrl+'Product'}`,data,{ headers });
  }
  getProductAsync(){
    return this.http.get(`${this.baseUrl+'Product'}`);
  }
}

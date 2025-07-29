import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment.ts/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  GetCategoryAsync(){
   return this.http.get(`${this.baseUrl+'Category'}`);
  }
  
}

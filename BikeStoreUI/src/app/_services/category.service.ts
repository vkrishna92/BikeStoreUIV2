import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../model/Category';
import { GetCategory } from '../model/GetCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl=environment.apiUrl;

  constructor(private http:HttpClient) {

   }
   getCategories()
   {
     return this.http.get<GetCategory[]>(this.baseUrl+"category");
   }

   createCategory(category:Category)
   {
     console.log(category);
     this.http.post<Category>(this.baseUrl+"category",category).subscribe(
       data=>{
         console.log(data);
       },
       error=>{
         console.log(error);
       }
       
     )
   }
}

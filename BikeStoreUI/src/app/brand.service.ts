import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetBrands } from './model/GetBrand';
import { environment } from 'src/environments/environment';
import { brand } from './model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getBrands()
  {
    return this.http.get<GetBrands[]>(this.baseUrl+"brand");
  }
  createBrand(brandInput)
  {
    this.http.post<brand>(this.baseUrl+"brand",brandInput).subscribe(data=>{

    },
    error=>{
      console.log(error());
      
    })
  }
}

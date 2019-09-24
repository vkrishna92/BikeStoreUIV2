import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetProduct } from '../model/GetProduct';
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  GetProducts()
  {
      return this.http.get<GetProduct[]>(this.baseUrl+"product");
  }
  CreateProduct(product:Product)
  {
    console.log("Inside Product Service:");
    console.log(product);
    this.http.post<Product>(this.baseUrl+"product",product).subscribe(x=>{

    },error=>{
      console.log(error);
    })
  }
}

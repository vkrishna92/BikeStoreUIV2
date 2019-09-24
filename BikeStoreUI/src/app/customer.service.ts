import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetCustomer } from './model/GetCustomer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getCustomers()
  {
     return this.http.get<GetCustomer[]>(this.baseUrl+"customer");
  }
  CreateCustomer(customer:GetCustomer)
  {
    return this.http.post<GetCustomer>(this.baseUrl+"customer",customer).subscribe(x=>{

    },error=>{
      console.log(error);
    })
  }

}

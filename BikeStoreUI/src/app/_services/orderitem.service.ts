import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../model/OrderItem';
import { GetOrderItem } from '../model/GetOrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  baseUrl = environment.apiUrl+"OrdeItem";
  constructor(private http:HttpClient) { }

  CreateOrderItem(orderline:OrderItem)
  {
    console.log(orderline);
    this.http.post<OrderItem>(this.baseUrl,orderline).subscribe(x=>{

    },
    error=>{
      console.log(error);
    })
  }
  GetOrderItem(salesId:number)
  {
    return this.http.get<GetOrderItem>(this.baseUrl+"/"+salesId);
  }
}

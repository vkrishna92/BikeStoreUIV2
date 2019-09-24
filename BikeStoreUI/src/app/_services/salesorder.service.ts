import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesOrder } from '../model/salesOrder';
import { environment } from 'src/environments/environment';
import { GetSalesOrder } from '../model/GetSalesOrder';

@Injectable({
  providedIn: 'root'
})
export class SalesorderService {

  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  /**
   *
   */
  CreateSalesOrder(salesOrderDto:SalesOrder)
  {    
    return this.http.post<number>(this.baseUrl+"salesorder",salesOrderDto);    
  }
  GetAllSalesOrders()
  {
    return this.http.get<GetSalesOrder[]>(this.baseUrl+"salesorder");
  }
  GetSalesOrder(id:number)
  {
    return this.http.get<GetSalesOrder>(this.baseUrl+"salesorder/"+id);
  }
}

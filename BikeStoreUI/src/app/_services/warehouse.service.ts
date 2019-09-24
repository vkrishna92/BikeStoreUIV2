import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { warehouse } from '../model/warehose';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  GetWarehouses()
  {
    return this.http.get<warehouse[]>(this.baseUrl+"warehouse");
  }
}

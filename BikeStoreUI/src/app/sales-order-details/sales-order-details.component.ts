import { Component, OnInit } from '@angular/core';
import { SalesorderService } from '../_services/salesorder.service';
import { OrderitemService } from '../_services/orderitem.service';
import { SalesOrder } from '../model/salesOrder';
import { GetSalesOrder } from '../model/GetSalesOrder';
import { GetOrderItem } from '../model/GetOrderItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales-order-details',
  templateUrl: './sales-order-details.component.html',
  styleUrls: ['./sales-order-details.component.css']
})
export class SalesOrderDetailsComponent implements OnInit {

  salesOrder?:GetSalesOrder;
  orderItem?:GetOrderItem;
  
  constructor(private _salesOrder:SalesorderService,private _orderitem:OrderitemService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    
    this.getSalesOrder();
    this.getOrderItem();
  }

  getSalesOrder()
  {
    const id= +this.route.snapshot.paramMap.get('id');
    this._salesOrder.GetSalesOrder(id).subscribe(x=>{
      this.salesOrder=x;
    })
  }
  getOrderItem()
  {
    const id= +this.route.snapshot.paramMap.get('id');
    this._orderitem.GetOrderItem(id).subscribe(x=>{
      this.orderItem=x;
    })
  }
  

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SalesOrder } from '../model/salesOrder';
import { SalesorderService } from '../_services/salesorder.service';
import { GetSalesOrder } from '../model/GetSalesOrder';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
export class SalesOrderListComponent implements OnInit {

  salesOrders:GetSalesOrder[];
  displayedColumns: string[] = ['id', 'customerName','orderStatus','orderDate','shippedDate','warehouseName'];
  dataSource = new MatTableDataSource(this.salesOrders);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private _salesOrder:SalesorderService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._salesOrder.GetAllSalesOrders().subscribe(x=>{
      this.salesOrders=x.reverse();
      this.dataSource.data=x;
    })
  }

  applyFilter(filterValue:string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

}

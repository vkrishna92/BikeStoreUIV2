import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { GetCustomer } from '../model/GetCustomer';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatChip} from '@angular/material/chips'


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customers:GetCustomer[];
  displayedColumns: string[] = ['id', 'firstName','lastName','phone','email'];
  dataSource = new MatTableDataSource(this.customers);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers()
  {
    this.customerService.getCustomers().subscribe(x=>{
      console.log(x);
        this.dataSource.data=x;
    })
  }
  save(f)
  {

  }
  applyFilter(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, RequiredValidator} from '@angular/forms';
import { CustomerService } from '../customer.service';
import { GetCustomer } from '../model/GetCustomer';
import { GetProduct } from '../model/GetProduct';
import { ProductService } from '../_services/product.service';
import { WarehouseService } from '../_services/warehouse.service';
import { warehouse } from '../model/warehose';
import { DatePipe } from '@angular/common'
import { SalesorderService } from '../_services/salesorder.service';
import { SalesOrder } from '../model/salesOrder';
import { OrderItem } from '../model/OrderItem';
import { OrderitemService } from '../_services/orderitem.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material';


@Component({
  selector: 'app-create-sales-order',
  templateUrl: './create-sales-order.component.html',
  styleUrls: ['./create-sales-order.component.css']
})
export class CreateSalesOrderComponent implements OnInit {

  @ViewChild('stepper',{static:true}) stepper:MatStepper;

  CustomerForm;
  ProductForm;
  salesOrderId:number=0;
  salesOrderStatus:string="in Draft"
  isLinear = true;
  customerList:GetCustomer[];
  productList : GetProduct[];
  warehousList:warehouse[];  
  constructor(private fb:FormBuilder,private customers:CustomerService,private products:ProductService,private warehouse:WarehouseService,private datePipe:DatePipe,
    private salesOrder:SalesorderService,private orderline:OrderitemService,private _snackBar:MatSnackBar,private router:Router) { }

  ngOnInit() {
    let currentDate = new Date();
    let nextDay= new Date();
    nextDay.setDate(currentDate.getDate()+1);    
    this.customers.getCustomers().subscribe(x=>{
      this.customerList=x;
    });
    this.products.GetProducts().subscribe(x=>{
      this.productList=x;      
    })
    this.warehouse.GetWarehouses().subscribe(x=>{
      this.warehousList=x;
    })
    this.CustomerForm=this.fb.group({
      customerId:[''],
      orderStatus:['SalesOrder'],
      orderDate:[this.datePipe.transform(currentDate,"MM/dd/yyyy")],
      shippedDate:[this.datePipe.transform(nextDay,"MM/dd/yyyy")],
      warehouseId:['']
    });
    this.ProductForm = this.fb.group({
      salesOrderId:[this.salesOrderId],
      productId:[],
      quantity:[''],
      discount:['']
    })
  }

saveSalesorder()
{
  let salesOrderCreate= this.CustomerForm.value as SalesOrder;
  this.salesOrder.CreateSalesOrder(salesOrderCreate).subscribe(x=>{
    this.salesOrderId=x;    
  })
    
}
saveProductLine()
{   
   let OrderItemCreate = this.ProductForm.value as OrderItem;
   OrderItemCreate.salesOrderId=this.salesOrderId;
   console.log("before post"+OrderItemCreate)
   this.orderline.CreateOrderItem(OrderItemCreate);   
   this.salesOrderStatus="created";
   this.openSnackBar("Your Order #"+this.salesOrderId+" has been created","close");
    this.router.navigate(['/salesorderlist']);
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}
}

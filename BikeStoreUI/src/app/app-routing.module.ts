import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { BrandComponent } from './brand/brand.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProductComponent } from './product/product.component';
import { CreateSalesOrderComponent } from './create-sales-order/create-sales-order.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderDetailsComponent } from './sales-order-details/sales-order-details.component';


const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:"home",component:HomeComponent},
  {path:'customers',component:CustomerlistComponent},
  {path:'customerdetails',component:CustomerComponent},
  {path:'brands',component:BrandComponent},
  {path:'products',component:ProductListComponent},
  {path:"productdetails",component:ProductComponent},
  {path:"salesorder",component:CreateSalesOrderComponent},
  {path:"salesorderlist",component:SalesOrderListComponent},
  {path:"salesorderdetails/:id",component:SalesOrderDetailsComponent},
  {path:"**",redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

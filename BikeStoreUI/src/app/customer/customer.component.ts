import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { GetCustomer } from '../model/GetCustomer';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customers:GetCustomer[];
  statesSelect:string[];
  customer:GetCustomer={id:0,firstName:"",lastName:"",phone:0,email:"",street:"",unit:"",city:"",state:"",zipcode:0}
  states:string[];
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit() {    
    this.states=['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    console.log(this.states);
  }

  getCustomers()
  {
    this.customerService.getCustomers().subscribe(x=>{
      this.customers=x;
    })
  }
  save(f)
  {
    console.log(f.value as GetCustomer);
    this.customerService.CreateCustomer(f.value as GetCustomer);
    f.reset();
    this.router.navigate(["/customers"]);
  }

}

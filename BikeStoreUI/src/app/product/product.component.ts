import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { CategoryService } from '../_services/category.service';
import { GetBrands } from '../model/GetBrand';
import { GetCategory } from '../model/GetCategory';
import { Product } from '../model/Product';
import { ProductService } from '../_services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product={id:0,productName:"",modelYear:0,brandId:0,categoryId:0,listPrice:0}
  brands:GetBrands[];
  categories:GetCategory[];
  constructor(private categoryService:CategoryService,private brandService:BrandService,private productservice:ProductService,private _snackbar : MatSnackBar,private router:Router) { }

  ngOnInit() {
    this.getBrands();
    this.getCategories();
  }
  getBrands()
  {
    this.brandService.getBrands().subscribe(x=>{
      this.brands=x;
    })
  }
  getCategories()
  {
    this.categoryService.getCategories().subscribe(x=>{
      this.categories=x;
    })
  }
  save(f)
  {
    console.log(f.value as Product);
      this.productservice.CreateProduct(f.value as Product);
      this.openSnackBar("Product added","X");   
         this.router.navigate(['/products']);

  }
openSnackBar(message: string, action: string)
  {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }
}

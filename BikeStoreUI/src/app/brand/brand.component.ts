import { Component, OnInit, ViewChild } from '@angular/core';
import { BrandService } from '../brand.service';
import { brand } from '../model/brand';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

 
  brands:brand[];
  displayedColumns: string[] = ['id', 'brandName'];
  dataSource = new MatTableDataSource(this.brands);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private brandService:BrandService,private _snackbar:MatSnackBar) { }

  ngOnInit() {
    this.getBrands();
    this.dataSource.paginator = this.paginator;
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(b=>{
      this.dataSource.data=b;
    })
  }
  createBrand(brandInput:brand)
  {
    this.brandService.createBrand(brandInput);
    this.getBrands();
  }
  save(f)
  {
      let tempBrand = f.value as brand;
      this.createBrand(tempBrand);      
      f.reset();
      this.getBrands();
      
  }
  openSnackBar(message: string, action: string)
  {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }

  onkeyUpFilter(filterValue:string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }


}

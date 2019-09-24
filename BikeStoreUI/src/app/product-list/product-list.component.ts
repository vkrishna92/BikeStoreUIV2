import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { GetProduct } from '../model/GetProduct';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[]=["productName","brand","modelYear","listPrice","category"];
  products:GetProduct[];
  dataSource = new MatTableDataSource(this.products);
  selection = new SelectionModel<GetProduct>(true, []);
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProductService();
    this.dataSource.paginator = this.paginator;
  }

  getProductService()
  {
      this.productService.GetProducts().subscribe(x=>{        
        this.dataSource.data=x;   
        console.log(x);           
      })
  }
  applyFilter(filterValue:string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: GetProduct): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

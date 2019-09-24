import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { Category } from '../model/Category';
import { MatTableDataSource } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'categoryName'];
  
  categories:Category[];
  category:Category={categoryName:""};
  dataSource = new MatTableDataSource(this.categories);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private categoryService:CategoryService,private _snackbar : MatSnackBar) { }

  ngOnInit() {
    this.GetCategories();
    this.dataSource.paginator = this.paginator;
  }

  GetCategories()
  {
    this.categoryService.getCategories().subscribe(x=>{        
        this.dataSource.data = x;
    })
  }
  AddCategory(categoryName:string)
  {
      this.category.categoryName=categoryName;
      console.log(categoryName);      
      this.categoryService.createCategory(this.category);
      this.GetCategories();
  }
  Save(f)
  {
      let categoryName:string;
      categoryName=f.value["categoryName"];
      console.log(categoryName);
      this.AddCategory(categoryName);
      f.reset();
      this.GetCategories();
      
  }

  openSnackBar(message: string, action: string)
  {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }
  applyFilter(filterValue:string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}

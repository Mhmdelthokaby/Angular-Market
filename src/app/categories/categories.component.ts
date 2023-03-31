import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories:any[]=[]
  constructor(private _ProductsService:ProductsService){}

  ngOnInit():void{
    this._ProductsService.getCategories().subscribe({
      next:(Response)=>{this.categories= Response.data}
    })
  }
}

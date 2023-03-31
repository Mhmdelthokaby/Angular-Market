import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any[]=[]

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void{
    this._ProductsService.getProducts().subscribe({
      next:(Response)=>this.products = Response.data
    })
  }
}


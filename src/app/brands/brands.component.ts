import { Component } from '@angular/core';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brands:any[]=[]

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void{
    this._ProductsService.getBrands().subscribe({
      next:(Response)=>this.brands = Response.data
    })
  }
}

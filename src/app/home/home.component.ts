import { ProductsService } from './../products.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:any[]=[]

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void{
    this._ProductsService.getProducts().subscribe({
      next:(Response)=>this.products = Response.data
    })
  }

  
}

import { CartService } from './../cart.service';
import { ProductsService } from './../products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _ProductsService:ProductsService,private _CartService:CartService){}
  productId:any ;
  productDetails:any;
  ngOnInit():void{

    this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.productId = params.get('id')
    })
    this._ProductsService.getProductsDetails(this.productId).subscribe({
      next:(Response)=>this.productDetails = Response.data
      
    })
  }

  addProduct(){
    this._CartService.addProduct(this.productId)
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  
}

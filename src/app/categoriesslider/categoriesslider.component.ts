import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-categoriesslider',
  templateUrl: './categoriesslider.component.html',
  styleUrls: ['./categoriesslider.component.css']
})
export class CategoriessliderComponent implements OnInit {

  categories:any[]=[]

  constructor(private _ProductsService:ProductsService){}

  ngOnInit():void{
    this._ProductsService.getCategories().subscribe({
      next:(Response)=>{this.categories= Response.data}
    })
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
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    },
    nav: true
  }

}

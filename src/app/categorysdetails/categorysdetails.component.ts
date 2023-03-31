import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorysdetails',
  templateUrl: './categorysdetails.component.html',
  styleUrls: ['./categorysdetails.component.css']
})
export class CategorysdetailsComponent {

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _ProductsService:ProductsService){}

  categoryId:any ;
  categoryDetails:any;
  ngOnInit():void{

    this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.categoryId = params.get('id')
    })
    this._ProductsService.getCategoryDetails(this.categoryId).subscribe({
      next:(Response)=>this.categoryDetails = Response.data
      
    })

  }
}

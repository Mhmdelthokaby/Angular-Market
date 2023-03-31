import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  isEmpty:boolean =true
  constructor(private _ActivatedRoute:ActivatedRoute ,private _CartService:CartService ){

  }

  OnInit(){
    if(this._CartService.cartProduct.length != 0)
    {
      this.isEmpty = false
    }
    else{
      this.isEmpty =true
    }
    
  }

}

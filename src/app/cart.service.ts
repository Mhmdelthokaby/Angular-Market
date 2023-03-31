import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartProduct:any[]=[]

  addProduct(id:string){
    this.cartProduct.push(id)
    
  }

}

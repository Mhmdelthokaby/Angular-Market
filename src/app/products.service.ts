import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient){}


  getProducts():Observable<any>
  {
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products')
  }
  getProductsDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }
  getCategoryDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}`)
  }
  getCategories():Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }
  getBrands():Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
  }
  
  
  
}

import { Injectable } from '@angular/core';
import {Product} from './product';        // 2 . import interface

@Injectable({
  providedIn: 'root'
})

// 2. create array  and  function to getallProducts
export class ProductService {
  product : Product [] = [
    { name : "Fish Pizza", price : 15.99, productId : "432"},
    { name : "Pineapple Pizza", price : 18.99, productId : "473"},
    { name : "Pesto Pizza", price : 12.99, productId : "9483"},
    { name : "meat Pie", price : 15.99, productId : "03943"},
    { name : "Dessert Pizza", price : 18.99, productId : "8883"}
  ]

  constructor () { }


  getAllProducts() : Product []  {
     return this.product;
}

}

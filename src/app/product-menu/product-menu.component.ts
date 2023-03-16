import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})


export class ProductMenuComponent {

  // 3.  create an aray to hold all products derived thru productService
  allProducts: Product[] = [];

  // 3. create constructor to get all products
  constructor( private productService : ProductService ) {

    this.allProducts = productService.getAllProducts();
    console.log(this.allProducts);
  }


}

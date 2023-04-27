import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
    addProductMessage:string|undefined;
    constructor(private product: ProductService){}
    submit(data:product) {
      this.product.addProduct(data).subscribe((result) => {
        console.warn(data);
        if(result==true){
          this.addProductMessage = "Item added successfully!";
        }
      });
      setTimeout(()=> {
        this.addProductMessage=undefined;
      },3000);
      
    }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList:undefined | product[];
  productMessage: undefined | string;
    constructor(private product:ProductService){}
    ngOnInit(): void {
        this.listProducts();
    }
    deleteProduct(id:number){
      this.product.deleteProduct(id).subscribe((result)=>{
        if(result){
          this.productMessage = "Product is deleted!";
          this.listProducts();
        }
      });
      setTimeout(()=> {
        this.productMessage=undefined;
      },3000);
    }
    listProducts(){
      this.product.productList().subscribe((result)=>{
        console.warn(result);
        if(result){
          this.productList=result;
        }
      });
    }
}

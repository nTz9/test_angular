import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path:'',
  },
  {
    component:ProductsComponent,
    path:'products',
  },
  {
    component:AddProductComponent,
    path:'add-product',
  },
  {
    component:UpdateProductComponent,
    path:'update-product/:id',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

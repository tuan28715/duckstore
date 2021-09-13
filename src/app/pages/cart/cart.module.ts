import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ProductsModule } from '../home/products.module'
import { AppModule } from 'src/app/app.module';
@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ProductsModule
  ]
})
export class CartModule { }

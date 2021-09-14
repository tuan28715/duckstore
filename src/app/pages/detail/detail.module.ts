import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsModule } from '../home/products.module';


@NgModule({
  declarations: [
    DetailComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ProductsModule
  ]
})
export class DetailModule { }

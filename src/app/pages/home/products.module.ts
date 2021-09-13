import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CarouselComponent } from './carousel/carousel.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgessbarComponent } from '../../microservices/progessbar/progessbar.component'

@NgModule({
  declarations: [
    ProductsComponent,
    ListProductsComponent,
    CarouselComponent,
    ProgessbarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatPaginatorModule,
    MatProgressBarModule
  ]
})
export class ProductsModule { }

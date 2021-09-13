import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CarouselComponent } from './carousel/carousel.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgessbarComponent } from '../../microservices/progessbar/progessbar.component'
import { RatingComponent } from 'src/app/microservices/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductsComponent,
    ListProductsComponent,
    CarouselComponent,
    ProgessbarComponent,
    RatingComponent

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatPaginatorModule,
    MatProgressBarModule,
    NgbModule,
    NgbPaginationModule,NgbAlertModule
  ],
  exports:[
    ProgessbarComponent,
  ],
  bootstrap:[ProductsComponent]
})
export class ProductsModule { }

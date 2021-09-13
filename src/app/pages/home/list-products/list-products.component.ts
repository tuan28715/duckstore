import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ProductService } from '../../../services/product.service'
import { convertPrice } from '../../../shared/convertprice'
import { Product } from '../../../models/product.model'
import {MatTableDataSource} from '@angular/material/table';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers: [NgbRatingConfig]
})

export class ListProductsComponent implements OnInit{

  constructor(private ProductService:ProductService, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
  products: any ;

  ngOnInit(): void {
    this.getServerData()
  }
  public getServerData(){
    this.ProductService.getAll().subscribe(data=>{
      if(!data){
        return;
      }
      this.products = data;
      // console.log(data)
      for(let i = 0; i< this.products.length; i++){
        let newPrice = convertPrice(this.products[i].price);
        let newPriceList = convertPrice(this.products[i].list_price)
        Object.assign(this.products[i], { newPrice: newPrice });
        Object.assign(this.products[i], { newPriceList: newPriceList });
      }
    })
  }
}


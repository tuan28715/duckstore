import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductService } from '../../../services/product.service'
import { convertPrice } from '../../../shared/convertprice'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private ProductService:ProductService) { }
  products: any;
  pageEvent: PageEvent;
  datasource: null;
  pageIndex:number;
  pageSize:number;
  length:number;
  ngOnInit(): void {
    this.getServerData(null)
  }
  public getServerData(event?:PageEvent){
    this.ProductService.getAll().subscribe(data=>{
      this.products = data;
      for(let i = 0; i< this.products.length; i++){
        let newPrice = convertPrice(this.products[i].price);
        let newPriceList = convertPrice(this.products[i].list_price)
        Object.assign(this.products[i], { newPrice: newPrice });
        Object.assign(this.products[i], { newPriceList: newPriceList });
      }
      this.pageIndex = this.products.pageIndex;
      this.pageSize = this.products.pageSize;
      this.length = this.products.length;
    })
    return event;
  }
  
}

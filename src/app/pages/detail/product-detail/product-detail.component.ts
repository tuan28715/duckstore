import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/product.model';
import { convertPrice } from '../../../shared/convertprice'
import { User } from '../../../models/user.model'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private ProductService:ProductService, private ActivatedRoute:ActivatedRoute, private HttpClient:HttpClient) { }
  queryProduct:any;
  public data: Product;
  product:any;
  public user : User;
  public _user = localStorage.getItem('username');
  ngOnInit(): void {
    this.queryProduct = this.ActivatedRoute.snapshot.params['id'];
    this.get();
  }

  async addToCart(product:any){
    console.log({user : this._user, product: product, quantity: 1});
  }

  async get(){
    await this.ProductService.getOne(this.queryProduct).subscribe(data=>{
      this.data = data;
      let newPrice = convertPrice(this.data.price);
      let newPriceList = convertPrice(this.data.list_price);
      Object.assign(this.data, { newPriceList: newPriceList }, {newPrice: newPrice});
      console.log(this.data)
    })
  }
}

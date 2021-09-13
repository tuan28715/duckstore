import { Injectable } from '@angular/core';
import { PRODUCT_API_URL } from '../config/config'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../models/product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) { }

  getAll(): Observable<Product>{
    return this.HttpClient.get<Product>(PRODUCT_API_URL + 'getall');
  }

}

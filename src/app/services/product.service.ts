import { Injectable } from '@angular/core';
import { PRODUCT_API_URL } from '../config/config'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) { }

  getAll(){
    return this.HttpClient.get(PRODUCT_API_URL + 'getall');
  }

}

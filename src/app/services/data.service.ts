import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //getJSON api call, shop 17
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getProduct(id): Observable<IProduct> {
    return this.http.get<IProduct>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + id);
  }

  createOrder() {
    
  }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productUrl: string;
  //getJSON api call, shop 17
  constructor(private http: HttpClient) {
    this.productUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl);
  }
}

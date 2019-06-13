import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productUrl: string;
  //getJSON api call, shop 17
  constructor(private http: HttpClient) {
    let productUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";
  }
  getProducts() {
    return this.http.get(this.productUrl);
  }
}

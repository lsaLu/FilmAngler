import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new Subject<ICartItem[]>();
  private cartData: ICartItem[];
  
  $cart = this.cart.asObservable();

  constructor() { }

  addToCart(id) {
    // get value, send into cartData

    this.cart.next(
      this.cartData
    );    

  }
}

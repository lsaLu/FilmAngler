import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/ICartItem';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new Subject<ICartItem[]>();
  private cartData: ICartItem[];
  
  $cart = this.cart.asObservable();

  constructor() { 
    if (!localStorage.hasOwnProperty('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  addToCart(product: ICartItem) {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      for (let i = 0; i < cart.length; i++) {
        if (product.movie.id === cart[i].movie.id) {
          cart[i].amount += 1;
          localStorage.setItem('cart', JSON.stringify(cart));
          return;
        }
      }
      const newCart = cart.concat(product);
      localStorage.setItem('cart', JSON.stringify(newCart));
      
    } else {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
    // get value, send into cartData
    
    this.cart.next(
      this.cartData
    );    

  }

  removeItem(id) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].movie.id === id) {
        const newCart = cart.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(newCart));
        //make dynamic
        this.getCart();
        return;
      }
    }
  }

  clearItems() {
    localStorage.setItem('cart', JSON.stringify([]));
    //make dynamic
  }

  getCart() {
    return this.$cart;
  }
}

import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: ICartItem[];

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

}

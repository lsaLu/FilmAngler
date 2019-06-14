import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IOrder } from 'src/app/interfaces/IOrder';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IOrderRows } from 'src/app/interfaces/IOrderRows';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

var moment = require('moment');

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: ICartItem[];
  orderRows: IOrderRows[] = [];
  totalPrice: number = 0;
  order: IOrder;

  form = this.fb.group({
    companyId: ["", Validators.required],
    createdBy: ["", Validators.required],
    paymentMethod: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private dataService: DataService, private cartService:CartService) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.form = new FormGroup({
      'companyId': new FormControl(),
      'createdBy': new FormControl(),
      'paymentMethod': new FormControl()
    });
    this.calcTotalPrice();
    this.formatOrderRows();
  }

  calcTotalPrice() {
    for (let i = 0; i < this.cart.length; i++) {
      this.totalPrice += this.cart[i].movie.price * this.cart[i].amount;
    }
  }

  formatOrderRows() {
    for (let i = 0; i < this.cart.length; i++) {
      const orderItem: IOrderRows = {
        id: 0,
        productId: this.cart[i].movie.id,
        product: this.cart[i].movie.name,
        amount: this.cart[i].amount,
        orderId: 0
      };
      this.orderRows.push(orderItem);
    }
  }

  submitOrder() {
    this.order = {
      id: 0,
      companyId: 17,
      created: moment().format(),
      createdBy: this.form.controls.createdBy.value,
      paymentMethod: this.form.controls.paymentMethod.value,
      totalPrice: this.totalPrice,
      status: 0,
      orderRows: this.orderRows
    }

    this.dataService.createOrder(this.order).subscribe(data => {
      localStorage.setItem('cart', JSON.stringify([]));
      this.cart = [];
      this.orderRows = [];
      this.totalPrice = 0;
      
    });
  }


  removeCartItem(id) {
    this.cartService.removeItem(id);
  }

  clearCartItems() {
    this.cartService.clearItems();
  }

}

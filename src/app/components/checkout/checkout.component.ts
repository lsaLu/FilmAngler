import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IOrder } from 'src/app/interfaces/IOrder';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: ICartItem[];
  order: IOrder;

  form = this.fb.group({
    companyId: [""],
    createdBy: [""],
    paymentMethod: [""]
  });
  
  constructor(private fb:FormBuilder) { 
  }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.form = new FormGroup({
      companyId: new FormControl(),
      createdBy: new FormControl(),
      paymentMethod: new FormControl()
    });
  }

  stackDuplicates(cart) {
    for(let i = 0; i < cart.length; i++) {
      
    }
  }

  submitOrder() {
    // this.order = 
  }

}

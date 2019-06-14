import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IOrder } from 'src/app/interfaces/IOrder';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: ICartItem[];
  order: IOrder;

  constructor(private fb:FormBuilder) { }

  form = this.fb.group({
    companyId: ["", Validators.required],
    createdBy: ["", Validators.required],
    paymentMethod: ["", Validators.required]
  });

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

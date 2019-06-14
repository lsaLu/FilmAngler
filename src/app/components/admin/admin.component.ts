import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IOrder } from 'src/app/interfaces/IOrder';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: IOrder[] = [{
    id: 0,
    companyId: 0,
    created: "",
    createdBy: "",
    paymentMethod: "",
    totalPrice: 0,
    status: 0,
    orderRows: []
  }];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

}

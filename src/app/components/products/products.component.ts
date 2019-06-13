import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[]; 

  constructor(private service: DataService) { }

  ngOnInit() {
    //call dataservice, subscribe
    this.service.getProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

}

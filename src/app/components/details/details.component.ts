import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IProduct } from 'src/app/interfaces/IProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  singleProduct: IProduct = {
    id: 0,
    name: "",
    imageUrl: "",
    description: "",
    price: 0,
    year: 0,
    added: "",
    productCategory: []
  };

  constructor(private route: ActivatedRoute, 
    private dataService: DataService,
    private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(myParams => {
      const targetId = parseInt(myParams["id"]);

      this.dataService.getProduct(targetId).subscribe(data => {
        this.singleProduct = data;
      });
    });
  }

  addToCart() {
    this.cartService.addToCart({movie:this.singleProduct, amount:1});
  }
}

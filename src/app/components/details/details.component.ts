import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IProduct } from 'src/app/interfaces/IProduct';

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

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(myParams => {
      const targetId = parseInt(myParams["id"]);

      this.service.getProduct(targetId).subscribe(data => {
        this.singleProduct = data;
      });
    });
  }
}

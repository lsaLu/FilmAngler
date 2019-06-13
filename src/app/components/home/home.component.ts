import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }

}

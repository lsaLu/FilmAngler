import { Component, OnInit, Input } from '@angular/core';
import { ILink } from 'src/app/interfaces/ILink';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() title;

  links: ILink[] = [
    { 
      name: "Home",
      route: "",
      routeOption: ["{ exact : true }"]
    },
    {
      name: "About",
      route: "/about",
      routeOption: [""]
    },
    {
      name: "Cart",
      route: "/cart",
      routeOption: [""]
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

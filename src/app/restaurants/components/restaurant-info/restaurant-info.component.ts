import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  restaurant: any;

  constructor() { }

  ngOnInit() {
    localStorage.setItem('dataSource', history.state.data);
    this.restaurant = history.state.data;
    console.log(history.state.data)
    console.log(localStorage.getItem('dataSource'));
  }

}

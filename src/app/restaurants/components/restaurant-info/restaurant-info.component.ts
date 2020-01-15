import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  restaurant: any;
  today: any = new Date().getHours();
  closingTime: any;
  constructor(private _location: Location) { }

  ngOnInit() {
    this.restaurant = history.state.data;
  }

  backClicked() {
    this._location.back();
  }

}

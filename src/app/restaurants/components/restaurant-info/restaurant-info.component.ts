import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  restaurant: any;
  today: any = Date();
  closingTime: any;
  constructor(private _location: Location) { }

  ngOnInit() {
    this.restaurant = history.state.data;
    // console.log(history.state.data.workingDays)
    this.getClosingTime()
  }

  getClosingTime() {
    const workingDays = history.state.data.workingDays;
    workingDays.forEach(workingDay => {
      const closingTime = workingDay.time.split('-')[1];
      this.closingTime = closingTime;
      console.log(this.closingTime)
    })
  }

  backClicked() {
    this._location.back();
  }

}

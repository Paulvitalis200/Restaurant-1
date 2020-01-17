import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  restaurant: any;
  today: any = new Date();
  todayDate24: any;
  closingTime: any;
  openingTime: any;
  closingTime24: any;
  constructor(private _location: Location) { }

  ngOnInit() {
    this.restaurant = history.state.data;
    this.getClosingTime();
    this.getConvertedClosingTime();
    this.getOpeningTime();
    this.getConvertedCurrentDate();
  }

  backClicked() {
    this._location.back();
  }

  getClosingTime() {
    const workingDays = history.state.data.workingDays;
    workingDays.forEach(workingDay => {
      const closingTime = workingDay.time.split('-')[1];
      this.closingTime = closingTime.trim();
    })
  }

  getConvertedClosingTime() {
    this.closingTime24 = this.convertTo24h(this.closingTime);
  }

  getConvertedCurrentDate() {
    const hours = this.today.getHours();
    const minutes = this.today.getMinutes();
    this.todayDate24 = `${hours}:${minutes}`;
  }

  convertTo24h(time12h) {
    const [time, modifier] = time12h.split(' ');

    if (time.includes(':')) {
      let [hours, minutes] = time.split(':');

      if (hours === '12') {
        hours = '00';
      }

      if (modifier === 'pm') {
        hours = parseInt(hours, 10) + 12;
      }
      return `${hours}:${minutes}`;
    } else {
      let [hours, minutes] = time.split(' ');

      if (hours === '12') {
        hours = '00';
      }

      if (modifier === 'pm') {
        hours = parseInt(hours) + 12;

      }
      return `${hours}:00`;
    }
  }

  getOpeningTime() {
    const workingDays = history.state.data.workingDays;
    workingDays.forEach(workingDay => {
      const hiphenPosition = workingDay.time.indexOf("-")
      const openingTime = workingDay.time.slice(0, hiphenPosition);
      this.openingTime = openingTime.trim();
    })
  }

}

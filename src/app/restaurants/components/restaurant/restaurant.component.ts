import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  workingDays: any;
  @Input() restaurant: { name: string, business_hours: string };
  constructor(private router: Router) { }

  ngOnInit() {
    this.splitDays();
  }

  splitDays() {
    const splitHours = this.restaurant.business_hours.split('/')
    let data = [];
    splitHours.forEach(item => {
      const [days, time] = item.split('|');
      days.split(',').forEach(day => {
        data.push({ day, time })
      })
    })
    this.workingDays = data;
    return data;
  }

  onClick() {
    this.router.navigate(['/restaurant-info'], { state: { data: { name: this.restaurant.name, workingDays: this.workingDays } } })
  }


}

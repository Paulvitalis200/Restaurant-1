import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any;
  constructor(private restaurantService: RestaurantService) { }
  
  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
    console.log(this.restaurants)
  }

}

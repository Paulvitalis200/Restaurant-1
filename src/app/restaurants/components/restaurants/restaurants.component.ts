import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any;
  totalRestaurants: number;
  restaurantsPerPage: number = 8;
  numberOfPages: number;
  p: number = 1;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(
      data => {
        this.restaurants = data;
        this.paginateRestaurants();
      },
      error => {
        console.log(error);
      }
    );
  }

  paginateRestaurants() {
    this.getTotalRestaurants();
    this.getNumberOfPages();
  }

  getTotalRestaurants() {
    this.totalRestaurants = this.restaurants.length;
  }

  getNumberOfPages() {
    this.numberOfPages = Math.ceil(this.totalRestaurants / this.restaurantsPerPage);
  }

}

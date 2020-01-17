import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { NgxSpinnerService } from "ngx-spinner";

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
  constructor(
    private restaurantService: RestaurantService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    this.restaurantService.getRestaurants().subscribe(
      data => {
        this.restaurants = data;
        this.paginateRestaurants();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
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

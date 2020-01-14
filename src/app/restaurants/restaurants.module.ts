import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';

@NgModule({
  declarations: [RestaurantsComponent, RestaurantComponent, RestaurantInfoComponent],
  imports: [
    CommonModule
  ]
})
export class RestaurantsModule { }

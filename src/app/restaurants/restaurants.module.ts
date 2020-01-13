import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';



@NgModule({
  declarations: [RestaurantsComponent, RestaurantComponent],
  imports: [
    CommonModule
  ]
})
export class RestaurantsModule { }

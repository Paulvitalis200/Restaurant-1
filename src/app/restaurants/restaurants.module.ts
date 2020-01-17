import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [RestaurantsComponent, RestaurantComponent, RestaurantInfoComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxSpinnerModule,
  ]
})
export class RestaurantsModule { }

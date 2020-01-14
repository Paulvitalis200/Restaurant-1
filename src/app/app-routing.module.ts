import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/components/restaurants/restaurants.component';
import { RestaurantInfoComponent } from './restaurants/components/restaurant-info/restaurant-info.component';


const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant-info', component: RestaurantInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

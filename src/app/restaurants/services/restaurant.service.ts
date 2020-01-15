import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurantsUrl: string = 'https://restaurant-api-1.herokuapp.com/api/restaurants';
  constructor(private http: HttpClient) { }

  // Get all Restaurants
  getRestaurants() {
    return this.http.get(`${this.restaurantsUrl}`)
  }
}

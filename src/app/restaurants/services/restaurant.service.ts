import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  // restaurants: string[] = [];
  restaurantsUrl: string = 'http://localhost:3000/api/restaurants';
  constructor(private http: HttpClient) { }

  // Get all Restaurants
  getRestaurants() {
    return this.http.get(`${this.restaurantsUrl}`)
    // return this.http.get('../../../assets/restaurants_2.csv', {responseType: 'text'})
  }
}

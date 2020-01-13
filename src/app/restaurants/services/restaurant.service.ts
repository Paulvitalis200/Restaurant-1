import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as csv from 'csv-parser';
// import * as fs from 'fs';
import Papa from 'papaparse';
import { writeFileSync, readFileSync } from 'fs';

function loadRestaurants() {
  fs.createReadStream('../../../../restaurants_2.csv')
    .pipe(csv())
    .on('data', (row) => {
      console.log(row);
      })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
}
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  // Get all Restaurants
  getRestaurants() {
    // loadRestaurants()
    // fs.createReadStream('../../../../restaurants_2.csv')
    // .pipe(csv())
    // .on('data', (row) => {
    //   console.log(row);
    //   })
    // .on('end', () => {
    //   console.log('CSV file successfully processed');
    // });
    // let reader = new FileReader();
    // const data = reader.readAsText("../../../../restaurants_2.csv");
    return data;
  }
}

import { TestBed } from '@angular/core/testing';
import { RestaurantService } from './restaurant.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RestaurantService]
  }));

  it('should be created', () => {
    const service: RestaurantService = TestBed.get(RestaurantService);
    expect(service).toBeTruthy();
  });

  it('should have getRestaurants function', () => {
    const service: RestaurantService = TestBed.get(RestaurantService);
    expect(service.getRestaurants).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurants';
import { Restaurant } from '../models/restaurant';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'app-restaurants',
  templateUrl: './restaurants.html',
})
export class Restaurants {
  restaurantsList : Restaurant[];
  
  constructor(private restaurantService : RestaurantService, public authService: Auth){
    this.restaurantsList = restaurantService.restaurantsList();
  };

  rmResto(r : Restaurant){
    this.restaurantService.removeRestaurant(r);
  }

}

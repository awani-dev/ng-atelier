import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../services/restaurants';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-resto',
  templateUrl: './add-resto.html',
})
export class AddResto {

  newResto = new Restaurant();

  constructor(private restaurantService : RestaurantService, private route : Router)
  {

  }

  addResto(){
    this.restaurantService.addRestaurant(this.newResto);
    this.route.navigate(['restaurants']);
  }

}

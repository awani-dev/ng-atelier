import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../services/restaurants';
import { Router } from '@angular/router';
import { CuisineType } from '../models/cuisine-type';

@Component({
  imports: [FormsModule],
  selector: 'app-add-resto',
  templateUrl: './add-resto.html',
})
export class AddResto {
  newResto = new Restaurant();
  cuisineTypes!: CuisineType[];
  newIdCuisine!: number;
  newCuisineType!: CuisineType;

  constructor(
    private restaurantService: RestaurantService,
    private route: Router,
  ) {}

  ngOnInit() {
  this.cuisineTypes = this.restaurantService.listeCuisineTypes();
}

  addResto() {
    this.newCuisineType = this.restaurantService.consulterCuisineType(this.newIdCuisine);
    this.newResto.cuisineType = this.newCuisineType;
    this.restaurantService.addRestaurant(this.newResto);
    this.route.navigate(['restaurants']);
  }
}

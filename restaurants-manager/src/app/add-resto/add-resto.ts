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
    this.restaurantService.listeCuisineTypes().subscribe(types => this.cuisineTypes = types);
}

  addResto() {
    this.newCuisineType = this.cuisineTypes.find(type => type.idCuisine === Number(this.newIdCuisine))!;
    this.newResto.cuisineType = this.newCuisineType;
    this.restaurantService.addRestaurant(this.newResto).subscribe(() => this.route.navigate(['restaurants']));
  }
}

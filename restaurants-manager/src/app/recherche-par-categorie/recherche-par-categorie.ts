import { Component } from '@angular/core';
import { CuisineType } from '../models/cuisine-type';
import { RestaurantService } from '../services/restaurants';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [DatePipe, FormsModule, CommonModule, RouterLink],
  selector: 'app-recherche-par-categorie',
  styles: ``,
  templateUrl: './recherche-par-categorie.html',
})
export class RechercheParCategorie {
  cuisineTypes!: CuisineType[];
  restaurantsList!: Restaurant[];
  cuisineId: number | null = null;
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.restaurantsList().subscribe(restaurants => this.restaurantsList = restaurants);
    this.restaurantService.listeCuisineTypes().subscribe(types => {
      this.cuisineTypes = types;
    });
  }

  onChange() {
    if (this.cuisineId === null) {
      this.restaurantService.restaurantsList().subscribe(restaurants => this.restaurantsList = restaurants);
      return;
    }
    this.restaurantService.rechercherParCategorie(this.cuisineId).subscribe(restaurants => this.restaurantsList = restaurants);
  }

  rmResto(r : Restaurant){
    this.restaurantService.removeRestaurant(r).subscribe(() => this.onChange());
  }

}
import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurants';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule, DatePipe, RouterLink],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom {
  restaurantsList!: Restaurant[];
  searchTerm: string = '';
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.searchRestaurants(this.searchTerm);
  }

  searchRestaurants(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.restaurantService.rechercherParNom(searchTerm.trim()).subscribe(restaurants => this.restaurantsList = restaurants);
  }

  rmResto(r: Restaurant) {
    this.restaurantService.removeRestaurant(r).subscribe(() => this.searchRestaurants(this.searchTerm));
  }
}

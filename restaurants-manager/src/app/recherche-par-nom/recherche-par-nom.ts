import { Component } from '@angular/core';
import { CuisineType } from '../models/cuisine-type';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurants';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SearchFilterPipe } from '../search-filter-pipe';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule, DatePipe, SearchFilterPipe, RouterLink],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom {
  cuisineTypes!: CuisineType[];
  restaurantsList!: Restaurant[];
  searchTerm: string = '';
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.restaurantsList().subscribe(restaurants => this.restaurantsList = restaurants);
    this.restaurantService.listeCuisineTypes().subscribe(types => this.cuisineTypes = types);
  }
  //onClick() {
  //  this.restaurantsList = this.restaurantService.rechercherParNom(this.searchTerm.toLowerCase());
  //}
  onKeyUp(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.restaurantService.rechercherParNom(inputElement.value.toLowerCase()).subscribe(restaurants => this.restaurantsList = restaurants);
  }
  /*onKeyUp(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.restaurantsList = this.restaurantService.rechercherParNom(inputElement.value.toLowerCase());
  }*/
  rmResto(r: Restaurant) {
    this.restaurantService.removeRestaurant(r).subscribe(() => this.restaurantService.restaurantsList().subscribe(restaurants => this.restaurantsList = restaurants));
  }
}

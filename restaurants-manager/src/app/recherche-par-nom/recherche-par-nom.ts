import { Component } from '@angular/core';
import { CuisineType } from '../models/cuisine-type';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurants';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  imports: [FormsModule, CommonModule, DatePipe, SearchFilterPipe],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom {
  cuisineTypes!: CuisineType[];
  restaurantsList!: Restaurant[];
  searchTerm : string = '';
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantsList = this.restaurantService.restaurantsList();
    this.cuisineTypes = this.restaurantService.listeCuisineTypes();
  }
  //onClick() {
  //  this.restaurantsList = this.restaurantService.rechercherParNom(this.searchTerm.toLowerCase());
  //}
  onKeyUp(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.restaurantsList = this.restaurantService.rechercherParNom(inputElement.value.toLowerCase());
  }
  /*onKeyUp(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.restaurantsList = this.restaurantService.rechercherParNom(inputElement.value.toLowerCase());
  }*/

}
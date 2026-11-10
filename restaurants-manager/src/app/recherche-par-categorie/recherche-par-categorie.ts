import { Component, NgModule } from '@angular/core';
import { CuisineType } from '../models/cuisine-type';
import { RestaurantService } from '../services/restaurants';
import { Router, RouterLink } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [DatePipe, FormsModule, CommonModule, RouterLink],
  selector: 'app-recherche-par-categorie',
  styles: ``,
  templateUrl: './recherche-par-categorie.html',
})
export class RechercheParCategorie {
  cuisineTypes!: CuisineType[];
  restaurantsList!: Restaurant[];
  CuisineId! : number;
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantsList = this.restaurantService.restaurantsList();
    this.cuisineTypes = this.restaurantService.listeCuisineTypes();
  }
  onChange() {
    this.restaurantsList = this.restaurantService.rechercherParCategorie(this.CuisineId);
  }
  rmResto(r : Restaurant){
    this.restaurantService.removeRestaurant(r);
  }

}
import { Component } from '@angular/core';
import { CuisineType } from '../models/cuisine-type';
import { RestaurantService } from '../services/restaurants';
import { UpdateCuisineType } from '../update-cuisine-type/update-cuisine-type';

@Component({
  imports: [UpdateCuisineType],
  selector: 'app-cuisine-types',
  templateUrl: './cuisine-types.html',
})
export class CuisineTypes {
  cuisineTypes: CuisineType[] = [];
  updatedCuisineType: CuisineType = { idCuisine: 0, nomCuisine: '' };
  ajout = true;
  message = '';
  messageIsError = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.chargerCuisineTypes();
  }

  chargerCuisineTypes(): void {
    this.cuisineTypes = [...this.restaurantService.listeCuisineTypes()];
  }

  selectCuisineType(cuisineType: CuisineType): void {
    this.updatedCuisineType = { ...cuisineType };
    this.ajout = false;
    this.message = '';
  }

  startAddingCuisineType(): void {
    this.updatedCuisineType = { idCuisine: 0, nomCuisine: '' };
    this.ajout = true;
  }

  saveCuisineType(cuisineType: CuisineType): void {
    if (this.ajout) {
      this.restaurantService.ajouterCuisineType(cuisineType);
      this.message = 'Type de cuisine ajouté.';
      this.messageIsError = false;
    } else {
      const updated = this.restaurantService.modifierCuisineType(cuisineType);
      this.message = updated
        ? 'Type de cuisine modifié.'
        : 'Ce type de cuisine n’existe plus.';
      this.messageIsError = !updated;
    }

    this.chargerCuisineTypes();
    this.startAddingCuisineType();
  }

  deleteCuisineType(cuisineType: CuisineType): void {
    const deleted = this.restaurantService.supprimerCuisineType(cuisineType.idCuisine);
    this.message = deleted
      ? 'Type de cuisine supprimé.'
      : 'Impossible de supprimer ce type : il est utilisé par au moins un restaurant.';
    this.messageIsError = !deleted;
    this.chargerCuisineTypes();
  }
}
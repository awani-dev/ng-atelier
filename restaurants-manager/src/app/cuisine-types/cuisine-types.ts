import { Component, signal } from '@angular/core';
import { CuisineType } from '../models/cuisine-type';
import { RestaurantService } from '../services/restaurants';
import { UpdateCuisineType } from '../update-cuisine-type/update-cuisine-type';

@Component({
  imports: [UpdateCuisineType],
  selector: 'app-cuisine-types',
  templateUrl: './cuisine-types.html',
})
export class CuisineTypes {
  cuisineTypes = signal<CuisineType[]>([]);
  updatedCuisineType: CuisineType = { idCuisine: 0, nomCuisine: '' };
  ajout = true;
  message = '';
  messageIsError = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.chargerCuisineTypes();
  }

  chargerCuisineTypes(): void {
    this.restaurantService.listeCuisineTypes().subscribe(types => this.cuisineTypes.set(types));
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
      this.restaurantService.ajouterCuisineType(cuisineType).subscribe(() => {
        this.message = 'Type de cuisine ajouté.';
        this.messageIsError = false;
        this.chargerCuisineTypes();
      }, () => {
        this.message = 'Impossible d’ajouter ce type de cuisine.';
        this.messageIsError = true;
      });
    } else {
      this.restaurantService.modifierCuisineType(cuisineType).subscribe(() => {
        this.message = 'Type de cuisine modifié.';
        this.messageIsError = false;
        this.chargerCuisineTypes();
      }, () => {
        this.message = 'Ce type de cuisine ne peut pas être modifié.';
        this.messageIsError = true;
      });
    }

    this.startAddingCuisineType();
  }

  deleteCuisineType(cuisineType: CuisineType): void {
    this.restaurantService.supprimerCuisineType(cuisineType.idCuisine).subscribe(() => {
      this.message = 'Type de cuisine supprimé.';
      this.messageIsError = false;
      this.chargerCuisineTypes();
    }, () => {
      this.message = 'Impossible de supprimer ce type : il est utilisé par au moins un restaurant.';
      this.messageIsError = true;
    });
  }
}
import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurants';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CuisineType } from '../models/cuisine-type';

@Component({
  imports: [FormsModule],
  selector: 'app-update-resto',
  templateUrl: './update-resto.html',
})
export class UpdateResto {
  currentResto!: Restaurant;
  cuisineTypes!: CuisineType[];
  updatedCuisineId!: number;
  constructor(
    private restoService: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.cuisineTypes = this.restoService.listeCuisineTypes();
    this.currentResto = this.restoService.getRestoById(
      this.activatedRoute.snapshot.params['id'],
    );
    this.updatedCuisineId = this.currentResto.cuisineType!.idCuisine;
  }

  updateResto() {
    this.currentResto.cuisineType = this.restoService.consulterCuisineType(this.updatedCuisineId);
    this.restoService.updateResto(this.currentResto);
    this.router.navigate(['restaurants']);
  }
}

import { Component, signal } from '@angular/core';
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
  currentResto = new Restaurant();
  cuisineTypes = signal<CuisineType[]>([]);
  loaded = signal(false);
  loadError = signal(false);
  updatedCuisineId!: number;
  constructor(
    private restoService: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.restoService.listeCuisineTypes().subscribe(types => this.cuisineTypes.set(types));
    this.restoService.getRestoById(id).subscribe({
      next: restaurant => {
        this.currentResto = restaurant;
        this.updatedCuisineId = restaurant.cuisineType!.idCuisine;
        this.loaded.set(true);
      },
      error: () => this.loadError.set(true),
    });
  }

  updateResto() {
    this.currentResto.cuisineType = this.cuisineTypes().find(type => type.idCuisine === Number(this.updatedCuisineId));
    this.restoService.updateResto(this.currentResto).subscribe(() => this.router.navigate(['restaurants']));
  }
}

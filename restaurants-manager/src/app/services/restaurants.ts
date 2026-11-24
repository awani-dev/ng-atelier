import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';
import { CuisineType } from '../models/cuisine-type';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  cuisineTypes!: CuisineType[];

  restaurants!: Restaurant[];

  private readonly apiUrl = 'http://localhost:8090/api';

  constructor(private readonly http: HttpClient) {}

  restaurantsList(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants`);
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${this.apiUrl}/restaurants`, restaurant);
  }

  removeRestaurant(restaurant: Restaurant): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/restaurants/${restaurant.id}`);
  }

  getRestoById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.apiUrl}/restaurants/${id}`);
  }

  updateResto(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`${this.apiUrl}/restaurants/${restaurant.id}`, restaurant);
  }

  listeCuisineTypes(): Observable<CuisineType[]> {
    return this.http.get<CuisineType[]>(`${this.apiUrl}/cuisine-types`);
  }

  ajouterCuisineType(cuisineType: CuisineType): Observable<CuisineType> {
    return this.http.post<CuisineType>(`${this.apiUrl}/cuisine-types`, cuisineType);
  }

  modifierCuisineType(cuisineType: CuisineType): Observable<CuisineType> {
    return this.http.put<CuisineType>(`${this.apiUrl}/cuisine-types/${cuisineType.idCuisine}`, cuisineType);
  }

  supprimerCuisineType(idCuisine: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cuisine-types/${idCuisine}`);
  }

  rechercherParCategorie(idCuisine: number): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants/by-cuisine/${idCuisine}`);
  }

  rechercherParNom(nom: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants/search`, { params: { name: nom } });
  }

}

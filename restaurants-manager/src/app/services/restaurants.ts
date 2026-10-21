import { Service } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { CuisineType } from '../models/cuisine-type';
import { Observable } from 'rxjs';

@Service()
export class RestaurantService {
  cuisineTypes: CuisineType[] = [
    { idCuisine: 1, nomCuisine: 'Italian' },
    { idCuisine: 2, nomCuisine: 'Mexican' },
    { idCuisine: 3, nomCuisine: 'Tunisian' },
    { idCuisine: 4, nomCuisine: 'French' },
    { idCuisine: 5, nomCuisine: 'Japanese' },
    { idCuisine: 6, nomCuisine: 'Chinese' },
    { idCuisine: 7, nomCuisine: 'Indian' },
    { idCuisine: 8, nomCuisine: 'Lebanese' },
    { idCuisine: 9, nomCuisine: 'Turkish' },
    { idCuisine: 10, nomCuisine: 'American' },
    { idCuisine: 11, nomCuisine: 'Spanish' },
    { idCuisine: 12, nomCuisine: 'Thai' },
  ];

  restaurants: Restaurant[] = [
    {
      id: 2,
      name: 'La Trattoria',
      address: '12 Avenue Habib Bourguiba, Tunis',
      cuisineType: { idCuisine: 1, nomCuisine: 'Italian' },
      dateOpened: new Date('2018-03-10'),
      capacity: 80,
      phoneNumber: '+216 71 234 567',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'El Sombrero',
      address: '5 Rue de Marseille, La Marsa',
      cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' },
      dateOpened: new Date('2019-06-21'),
      capacity: 60,
      phoneNumber: '+216 71 345 678',
      rating: 4.0,
    },
    {
      id: 4,
      name: 'Dar El Jeld',
      address: '5 Rue Dar El Jeld, Medina of Tunis',
      cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' },
      dateOpened: new Date('1995-11-02'),
      capacity: 150,
      phoneNumber: '+216 71 560 916',
      rating: 4.8,
    },
    {
      id: 5,
      name: 'Le Petit Bistro',
      address: '23 Rue de Palestine, Tunis',
      cuisineType: { idCuisine: 4, nomCuisine: 'French' },
      dateOpened: new Date('2016-04-18'),
      capacity: 45,
      phoneNumber: '+216 71 789 012',
      rating: 4.3,
    },
    {
      id: 6,
      name: 'Sakura Sushi',
      address: '8 Rue du Lac Léman, Les Berges du Lac',
      cuisineType: { idCuisine: 5, nomCuisine: 'Japanese' },
      dateOpened: new Date('2020-01-25'),
      capacity: 55,
      phoneNumber: '+216 71 862 340',
      rating: 4.6,
    },
    {
      id: 7,
      name: 'Golden Dragon',
      address: '40 Avenue de la Liberté, Tunis',
      cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' },
      dateOpened: new Date('2012-08-30'),
      capacity: 100,
      phoneNumber: '+216 71 892 455',
      rating: 3.9,
    },
  ];

  restaurantsList(): Restaurant[] {
    return this.restaurants;
  }

  addRestaurant(r: Restaurant) {
    this.restaurants.push(r);
  }
  removeRestaurant(r: Restaurant) {
    const index = this.restaurants.indexOf(r, 0);
    if (index > -1) {
      this.restaurants.splice(index, 1);
    }
  }

  getRestoById(id: number): Restaurant {
    return this.restaurants.find((r) => r.id == id)!;
  }
  updateResto(r: Restaurant) {
    const index = this.restaurants.indexOf(r, 0);
    if (index > -1) {
      this.restaurants.splice(index, 1);
      this.restaurants.splice(index, 0, r);
    }
  }
  listeCuisineTypes(): CuisineType[] {
    return this.cuisineTypes;
  }

  consulterCuisineType(id: number): CuisineType {
    return this.cuisineTypes.find((cat) => cat.idCuisine == id)!;
  }
  rechercherParCategorie(idCuisine: number) : Restaurant[]{
    return this.restaurants.filter((value)=> value.cuisineType?.idCuisine == idCuisine );
  }
  rechercherParNom(nom: string) : Restaurant[]{
    return this.restaurants.filter((value)=> value.name?.toLowerCase().includes(nom));
  }

}

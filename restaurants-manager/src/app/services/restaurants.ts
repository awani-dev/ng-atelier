import { Service } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { CuisineType } from '../models/cuisine-type';

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
      id: 1,
      name: 'Resto ISET',
      address: 'ISET Campus, Jedeida',
      cuisineType: { idCuisine: 1, nomCuisine: 'Italian' },
      dateOpened: new Date('2021-09-15'),
      capacity: 120,
      phoneNumber: '+216 71 123 456',
      rating: 4.2,
    },
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
    {
      id: 8,
      name: 'Taj Mahal',
      address: '17 Rue Ibn Khaldoun, Sousse',
      cuisineType: { idCuisine: 7, nomCuisine: 'Indian' },
      dateOpened: new Date('2017-02-14'),
      capacity: 70,
      phoneNumber: '+216 73 225 118',
      rating: 4.4,
    },
    {
      id: 9,
      name: 'Cedar House',
      address: '3 Boulevard du 14 Janvier, Sousse',
      cuisineType: { idCuisine: 8, nomCuisine: 'Lebanese' },
      dateOpened: new Date('2015-05-09'),
      capacity: 90,
      phoneNumber: '+216 73 227 640',
      rating: 4.5,
    },
    {
      id: 10,
      name: 'Istanbul Grill',
      address: '22 Avenue Mohamed V, Monastir',
      cuisineType: { idCuisine: 9, nomCuisine: 'Turkish' },
      dateOpened: new Date('2019-10-12'),
      capacity: 85,
      phoneNumber: '+216 73 461 205',
      rating: 4.1,
    },
    {
      id: 11,
      name: 'Burger Factory',
      address: '9 Avenue Hédi Chaker, Sfax',
      cuisineType: { idCuisine: 10, nomCuisine: 'American' },
      dateOpened: new Date('2021-03-05'),
      capacity: 110,
      phoneNumber: '+216 74 296 733',
      rating: 3.8,
    },
    {
      id: 12,
      name: 'La Paella',
      address: '14 Rue de Carthage, Hammamet',
      cuisineType: { idCuisine: 11, nomCuisine: 'Spanish' },
      dateOpened: new Date('2018-07-20'),
      capacity: 65,
      phoneNumber: '+216 72 280 919',
      rating: 4.2,
    },
    {
      id: 13,
      name: 'Bangkok Street',
      address: '31 Rue Mongi Slim, Tunis',
      cuisineType: { idCuisine: 12, nomCuisine: 'Thai' },
      dateOpened: new Date('2022-02-11'),
      capacity: 50,
      phoneNumber: '+216 71 905 377',
      rating: 4.3,
    },
    {
      id: 14,
      name: 'Chez Slah',
      address: 'Port de La Goulette, La Goulette',
      cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' },
      dateOpened: new Date('1988-06-15'),
      capacity: 130,
      phoneNumber: '+216 71 735 422',
      rating: 4.7,
    },
    {
      id: 15,
      name: 'Pizzeria Napoli',
      address: '6 Rue de Rome, Sousse',
      cuisineType: { idCuisine: 1, nomCuisine: 'Italian' },
      dateOpened: new Date('2014-09-01'),
      capacity: 75,
      phoneNumber: '+216 73 219 804',
      rating: 4.0,
    },
    {
      id: 16,
      name: 'Casa Mexicana',
      address: '19 Avenue de la République, Nabeul',
      cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' },
      dateOpened: new Date('2020-11-27'),
      capacity: 70,
      phoneNumber: '+216 72 285 160',
      rating: 4.1,
    },
    {
      id: 17,
      name: 'Maison Lumière',
      address: '2 Rue Hédi Karray, Ariana',
      cuisineType: { idCuisine: 4, nomCuisine: 'French' },
      dateOpened: new Date('2013-12-03'),
      capacity: 60,
      phoneNumber: '+216 71 714 329',
      rating: 4.6,
    },
    {
      id: 18,
      name: 'Tokyo Ramen House',
      address: '27 Avenue Habib Thameur, Tunis',
      cuisineType: { idCuisine: 5, nomCuisine: 'Japanese' },
      dateOpened: new Date('2021-05-17'),
      capacity: 40,
      phoneNumber: '+216 71 340 786',
      rating: 4.4,
    },
    {
      id: 19,
      name: 'Jade Garden',
      address: '11 Rue Ali Bach Hamba, Bizerte',
      cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' },
      dateOpened: new Date('2016-01-22'),
      capacity: 95,
      phoneNumber: '+216 72 431 250',
      rating: 4.0,
    },
    {
      id: 20,
      name: 'Spice Route',
      address: '35 Avenue Taieb Mhiri, Tunis',
      cuisineType: { idCuisine: 7, nomCuisine: 'Indian' },
      dateOpened: new Date('2019-04-08'),
      capacity: 65,
      phoneNumber: '+216 71 832 096',
      rating: 4.5,
    },
    {
      id: 21,
      name: 'Beirut Nights',
      address: '8 Rue de Yougoslavie, Tunis',
      cuisineType: { idCuisine: 8, nomCuisine: 'Lebanese' },
      dateOpened: new Date('2017-09-29'),
      capacity: 100,
      phoneNumber: '+216 71 347 518',
      rating: 4.3,
    },
    {
      id: 22,
      name: 'Anatolia Kebab',
      address: '4 Rue Farhat Hached, Sfax',
      cuisineType: { idCuisine: 9, nomCuisine: 'Turkish' },
      dateOpened: new Date('2022-06-13'),
      capacity: 55,
      phoneNumber: '+216 74 225 691',
      rating: 3.9,
    },
    {
      id: 23,
      name: 'Route 66 Diner',
      address: '16 Avenue Kheireddine Pacha, Tunis',
      cuisineType: { idCuisine: 10, nomCuisine: 'American' },
      dateOpened: new Date('2018-10-06'),
      capacity: 120,
      phoneNumber: '+216 71 788 403',
      rating: 4.2,
    },
    {
      id: 24,
      name: 'Tapas y Vino',
      address: '7 Rue Pierre de Coubertin, Hammamet',
      cuisineType: { idCuisine: 11, nomCuisine: 'Spanish' },
      dateOpened: new Date('2020-08-19'),
      capacity: 50,
      phoneNumber: '+216 72 262 774',
      rating: 4.4,
    },
    {
      id: 25,
      name: 'Pad Thai Corner',
      address: '13 Avenue de Paris, Sousse',
      cuisineType: { idCuisine: 12, nomCuisine: 'Thai' },
      dateOpened: new Date('2023-01-30'),
      capacity: 45,
      phoneNumber: '+216 73 230 562',
      rating: 4.1,
    },
    {
      id: 26,
      name: 'Le Café des Nattes',
      address: 'Rue Principale, Sidi Bou Said',
      cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' },
      dateOpened: new Date('1990-04-04'),
      capacity: 80,
      phoneNumber: '+216 71 740 887',
      rating: 4.4,
    },
    {
      id: 27,
      name: 'Villa Bella',
      address: '25 Rue du Lac Biwa, Les Berges du Lac',
      cuisineType: { idCuisine: 1, nomCuisine: 'Italian' },
      dateOpened: new Date('2022-09-09'),
      capacity: 90,
      phoneNumber: '+216 71 960 125',
      rating: 4.7,
    },
    {
      id: 28,
      name: 'Taqueria El Fuego',
      address: '10 Avenue Léopold Sédar Senghor, Tunis',
      cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' },
      dateOpened: new Date('2023-05-20'),
      capacity: 58,
      phoneNumber: '+216 71 325 940',
      rating: 3.7,
    },
    {
      id: 29,
      name: 'Brasserie du Port',
      address: 'Port El Kantaoui, Hammam Sousse',
      cuisineType: { idCuisine: 4, nomCuisine: 'French' },
      dateOpened: new Date('2011-07-14'),
      capacity: 140,
      phoneNumber: '+216 73 348 211',
      rating: 4.1,
    },
    {
      id: 30,
      name: 'Chez Mami Fatma',
      address: '21 Rue Hassen Ibn Nomane, Kairouan',
      cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' },
      dateOpened: new Date('2014-03-28'),
      capacity: 70,
      phoneNumber: '+216 77 231 604',
      rating: 4.6,
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
}

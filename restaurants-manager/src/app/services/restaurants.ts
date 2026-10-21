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
    { idCuisine: 13, nomCuisine: 'Greek' },
    { idCuisine: 14, nomCuisine: 'Vietnamese' },
    { idCuisine: 15, nomCuisine: 'Korean' },
    { idCuisine: 16, nomCuisine: 'Moroccan' },
    { idCuisine: 17, nomCuisine: 'Brazilian' },
    { idCuisine: 18, nomCuisine: 'Egyptian' },
    { idCuisine: 19, nomCuisine: 'Peruvian' },
    { idCuisine: 20, nomCuisine: 'Ethiopian' },
    { idCuisine: 21, nomCuisine: 'Algerian' },
    { idCuisine: 22, nomCuisine: 'German' },
    { idCuisine: 23, nomCuisine: 'Belgian' },
    { idCuisine: 24, nomCuisine: 'Portuguese' },
    { idCuisine: 25, nomCuisine: 'Caribbean' },
  ];

  restaurants: Restaurant[] = [
    // ITALIAN (1)
    { id: 1, name: 'La Trattoria', address: '12 Avenue Habib Bourguiba, Tunis', cuisineType: { idCuisine: 1, nomCuisine: 'Italian' }, dateOpened: new Date('2018-03-10'), capacity: 80, phoneNumber: '+216 71 234 567', rating: 4.5 },
    { id: 2, name: 'Bella Pasta', address: 'Rue du Lac Léman, Tunis', cuisineType: { idCuisine: 1, nomCuisine: 'Italian' }, dateOpened: new Date('2015-05-20'), capacity: 50, phoneNumber: '+216 71 234 568', rating: 4.2 },
    { id: 3, name: 'Roma Antica', address: 'La Marsa Ville, Tunis', cuisineType: { idCuisine: 1, nomCuisine: 'Italian' }, dateOpened: new Date('2010-11-12'), capacity: 100, phoneNumber: '+216 71 234 569', rating: 4.7 },
    { id: 4, name: 'Venezia Bistro', address: 'Sidi Bou Said, Tunis', cuisineType: { idCuisine: 1, nomCuisine: 'Italian' }, dateOpened: new Date('2021-01-15'), capacity: 40, phoneNumber: '+216 71 234 570', rating: 4.1 },
    { id: 5, name: 'Tuscany Garden', address: 'Gammarth, Tunis', cuisineType: { idCuisine: 1, nomCuisine: 'Italian' }, dateOpened: new Date('2017-08-30'), capacity: 120, phoneNumber: '+216 71 234 571', rating: 4.8 },

    // MEXICAN (2)
    { id: 6, name: 'El Sombrero', address: '5 Rue de Marseille, La Marsa', cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' }, dateOpened: new Date('2019-06-21'), capacity: 60, phoneNumber: '+216 71 345 678', rating: 4.0 },
    { id: 7, name: 'Taco Fiesta', address: 'Avenue Mohamed V, Tunis', cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' }, dateOpened: new Date('2020-03-10'), capacity: 45, phoneNumber: '+216 71 345 679', rating: 3.8 },
    { id: 8, name: 'Casa Del Sol', address: 'Les Berges du Lac, Tunis', cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' }, dateOpened: new Date('2016-12-01'), capacity: 70, phoneNumber: '+216 71 345 680', rating: 4.3 },
    { id: 9, name: 'Maya Grill', address: 'Sousse Corniche, Sousse', cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' }, dateOpened: new Date('2022-07-14'), capacity: 80, phoneNumber: '+216 73 345 681', rating: 4.1 },
    { id: 10, name: 'Aztec Kitchen', address: 'Hammamet North, Hammamet', cuisineType: { idCuisine: 2, nomCuisine: 'Mexican' }, dateOpened: new Date('2014-02-28'), capacity: 55, phoneNumber: '+216 72 345 682', rating: 3.9 },

    // TUNISIAN (3)
    { id: 11, name: 'Dar El Jeld', address: '5 Rue Dar El Jeld, Medina of Tunis', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('1995-11-02'), capacity: 150, phoneNumber: '+216 71 560 916', rating: 4.8 },
    { id: 12, name: 'Le Golfe', address: 'Sidi Bou Said, Tunis', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('1988-04-12'), capacity: 110, phoneNumber: '+216 71 560 917', rating: 4.6 },
    { id: 13, name: 'La Casa del Couscous', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('2012-09-20'), capacity: 60, phoneNumber: '+216 71 560 918', rating: 4.3 },
    { id: 14, name: 'Le Jasmine', address: 'Hammamet, Tunisia', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('2005-06-15'), capacity: 90, phoneNumber: '+216 72 560 919', rating: 4.4 },
    { id: 15, name: ' Carthage Palace', address: 'Carthage, Tunis', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('2001-10-10'), capacity: 200, phoneNumber: '+216 71 560 920', rating: 4.7 },
    { id: 16, name: 'The Medina Grill', address: 'Medina, Tunis', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('2017-03-03'), capacity: 50, phoneNumber: '+216 71 560 921', rating: 4.2 },
    { id: 17, name: 'Sousse Seafood', address: 'Port El Kantaoui, Sousse', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('2011-11-11'), capacity: 130, phoneNumber: '+216 73 560 922', rating: 4.5 },
    { id: 18, name: 'Sahara Flavors', address: 'Tozeur Road, Tunis', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('2019-08-08'), capacity: 70, phoneNumber: '+216 71 560 923', rating: 4.1 },

    // FRENCH (4)
    { id: 19, name: 'Le Petit Bistro', address: '23 Rue de Palestine, Tunis', cuisineType: { idCuisine: 4, nomCuisine: 'French' }, dateOpened: new Date('2016-04-18'), capacity: 45, phoneNumber: '+216 71 789 012', rating: 4.3 },
    { id: 20, name: 'L\'Etoile', address: 'Avenue Habib Bourguiba, Tunis', cuisineType: { idCuisine: 4, nomCuisine: 'French' }, dateOpened: new Date('1992-01-20'), capacity: 80, phoneNumber: '+216 71 789 013', rating: 4.6 },
    { id: 21, name: 'Le Gourmet', address: 'Les Berges du Lac, Tunis', cuisineType: { idCuisine: 4, nomCuisine: 'French' }, dateOpened: new Date('2013-07-15'), capacity: 60, phoneNumber: '+216 71 789 014', rating: 4.4 },
    { id: 22, name: 'Chez Marc', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 4, nomCuisine: 'French' }, dateOpened: new Date('2008-03-11'), capacity: 40, phoneNumber: '+216 71 789 015', rating: 4.1 },
    { id: 23, name: 'La Brasserie', address: 'Sousse City, Sousse', cuisineType: { idCuisine: 4, nomCuisine: 'French' }, dateOpened: new Date('2015-12-01'), capacity: 100, phoneNumber: '+216 73 789 016', rating: 4.2 },

    // JAPANESE (5)
    { id: 24, name: 'Sakura Sushi', address: '8 Rue du Lac Léman, Les Berges du Lac', cuisineType: { idCuisine: 5, nomCuisine: 'Japanese' }, dateOpened: new Date('2020-01-25'), capacity: 55, phoneNumber: '+216 71 862 340', rating: 4.6 },
    { id: 25, name: 'Tokyo Zen', address: 'Gammarth, Tunis', cuisineType: { idCuisine: 5, nomCuisine: 'Japanese' }, dateOpened: new Date('2018-11-05'), capacity: 40, phoneNumber: '+216 71 862 341', rating: 4.7 },
    { id: 26, name: 'Kyoto Kitchen', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 5, nomCuisine: 'Japanese' }, dateOpened: new Date('2021-06-18'), capacity: 50, phoneNumber: '+216 71 862 342', rating: 4.3 },
    { id: 27, name: 'Osaka Grill', address: 'Tunis Center, Tunis', cuisineType: { idCuisine: 5, nomCuisine: 'Japanese' }, dateOpened: new Date('2014-02-14'), capacity: 70, phoneNumber: '+216 71 862 343', rating: 3.9 },
    { id: 28, name: 'Sushi Master', address: 'Sousse, Tunisia', cuisineType: { idCuisine: 5, nomCuisine: 'Japanese' }, dateOpened: new Date('2019-09-22'), capacity: 60, phoneNumber: '+216 73 862 344', rating: 4.4 },

    // CHINESE (6)
    { id: 29, name: 'Golden Dragon', address: '40 Avenue de la Liberté, Tunis', cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' }, dateOpened: new Date('2012-08-30'), capacity: 100, phoneNumber: '+216 71 892 455', rating: 3.9 },
    { id: 30, name: 'Jade Palace', address: 'Les Berges du Lac, Tunis', cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' }, dateOpened: new Date('2016-03-15'), capacity: 120, phoneNumber: '+216 71 892 456', rating: 4.2 },
    { id: 31, name: 'Great Wall', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' }, dateOpened: new Date('2010-10-10'), capacity: 80, phoneNumber: '+216 71 892 457', rating: 4.0 },
    { id: 32, name: 'Shanghai Express', address: 'Tunis Center, Tunis', cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' }, dateOpened: new Date('2022-01-01'), capacity: 40, phoneNumber: '+216 71 892 458', rating: 3.7 },]

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

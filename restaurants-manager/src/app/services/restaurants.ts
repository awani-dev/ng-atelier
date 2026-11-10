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
    { id: 15, name: 'Carthage Palace', address: 'Carthage, Tunis', cuisineType: { idCuisine: 3, nomCuisine: 'Tunisian' }, dateOpened: new Date('2001-10-10'), capacity: 200, phoneNumber: '+216 71 560 920', rating: 4.7 },
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
    { id: 32, name: 'Shanghai Express', address: 'Tunis Center, Tunis', cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' }, dateOpened: new Date('2022-01-01'), capacity: 40, phoneNumber: '+216 71 892 458', rating: 3.7 },
    { id: 33, name: 'Peking Garden', address: 'Les Berges du Lac 2, Tunis', cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' }, dateOpened: new Date('2018-05-12'), capacity: 95, phoneNumber: '+216 71 892 459', rating: 4.3 },
    { id: 34, name: 'Dim Sum House', address: 'Route de la Soukra, Tunis', cuisineType: { idCuisine: 6, nomCuisine: 'Chinese' }, dateOpened: new Date('2021-09-01'), capacity: 50, phoneNumber: '+216 71 892 460', rating: 4.5 },

    // INDIAN (7)
    { id: 35, name: 'Taj Mahal', address: 'Avenue Habib Bourguiba, Tunis', cuisineType: { idCuisine: 7, nomCuisine: 'Indian' }, dateOpened: new Date('2015-02-10'), capacity: 75, phoneNumber: '+216 71 901 234', rating: 4.6 },
    { id: 36, name: 'Bombay Lounge', address: 'Les Berges du Lac, Tunis', cuisineType: { idCuisine: 7, nomCuisine: 'Indian' }, dateOpened: new Date('2019-11-20'), capacity: 65, phoneNumber: '+216 71 901 235', rating: 4.4 },
    { id: 37, name: 'Curry House', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 7, nomCuisine: 'Indian' }, dateOpened: new Date('2021-04-05'), capacity: 45, phoneNumber: '+216 71 901 236', rating: 4.2 },

    // LEBANESE (8)
    { id: 38, name: 'Al Diwan', address: 'Les Berges du Lac 1, Tunis', cuisineType: { idCuisine: 8, nomCuisine: 'Lebanese' }, dateOpened: new Date('2014-06-18'), capacity: 110, phoneNumber: '+216 71 123 987', rating: 4.7 },
    { id: 39, name: 'Beirut Nights', address: 'Gammarth, Tunis', cuisineType: { idCuisine: 8, nomCuisine: 'Lebanese' }, dateOpened: new Date('2017-09-30'), capacity: 130, phoneNumber: '+216 71 123 988', rating: 4.5 },
    { id: 40, name: 'Cedar Grill', address: 'Ennasr 2, Tunis', cuisineType: { idCuisine: 8, nomCuisine: 'Lebanese' }, dateOpened: new Date('2020-02-14'), capacity: 70, phoneNumber: '+216 71 123 989', rating: 4.3 },

    // TURKISH (9)
    { id: 41, name: 'Sultan Sofrasi', address: 'Avenue Hédi Nouira, Ennasr', cuisineType: { idCuisine: 9, nomCuisine: 'Turkish' }, dateOpened: new Date('2016-10-12'), capacity: 90, phoneNumber: '+216 71 456 789', rating: 4.5 },
    { id: 42, name: 'Bosphorus Delight', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 9, nomCuisine: 'Turkish' }, dateOpened: new Date('2019-01-22'), capacity: 60, phoneNumber: '+216 71 456 790', rating: 4.3 },
    { id: 43, name: 'Ottoman House', address: 'Sousse Ville, Sousse', cuisineType: { idCuisine: 9, nomCuisine: 'Turkish' }, dateOpened: new Date('2022-03-08'), capacity: 85, phoneNumber: '+216 73 456 791', rating: 4.4 },

    // AMERICAN (10)
    { id: 44, name: 'The American Diner', address: 'Avenue de la Cité Olympique, Tunis', cuisineType: { idCuisine: 10, nomCuisine: 'American' }, dateOpened: new Date('2018-07-04'), capacity: 80, phoneNumber: '+216 71 654 321', rating: 4.2 },
    { id: 45, name: 'Texas Smokehouse', address: 'Les Berges du Lac 2, Tunis', cuisineType: { idCuisine: 10, nomCuisine: 'American' }, dateOpened: new Date('2020-08-15'), capacity: 100, phoneNumber: '+216 71 654 322', rating: 4.6 },
    { id: 46, name: 'Route 66 Burger', address: 'Menezeh 9, Tunis', cuisineType: { idCuisine: 10, nomCuisine: 'American' }, dateOpened: new Date('2021-12-01'), capacity: 50, phoneNumber: '+216 71 654 323', rating: 4.1 },

    // SPANISH (11)
    { id: 47, name: 'La Tapas Bar', address: 'Sidi Bou Said, Tunis', cuisineType: { idCuisine: 11, nomCuisine: 'Spanish' }, dateOpened: new Date('2017-05-19'), capacity: 55, phoneNumber: '+216 71 333 444', rating: 4.4 },
    { id: 48, name: 'El Flamenko', address: 'La Marsa Cube, Tunis', cuisineType: { idCuisine: 11, nomCuisine: 'Spanish' }, dateOpened: new Date('2019-08-25'), capacity: 70, phoneNumber: '+216 71 333 445', rating: 4.3 },
    { id: 49, name: 'Sevilla Paella', address: 'Port El Kantaoui, Sousse', cuisineType: { idCuisine: 11, nomCuisine: 'Spanish' }, dateOpened: new Date('2021-03-14'), capacity: 90, phoneNumber: '+216 73 333 446', rating: 4.5 },

    // THAI (12)
    { id: 50, name: 'Bangkok Street', address: 'Les Berges du Lac 1, Tunis', cuisineType: { idCuisine: 12, nomCuisine: 'Thai' }, dateOpened: new Date('2019-04-10'), capacity: 45, phoneNumber: '+216 71 777 888', rating: 4.6 },
    { id: 51, name: 'Thai Spice', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 12, nomCuisine: 'Thai' }, dateOpened: new Date('2021-10-05'), capacity: 40, phoneNumber: '+216 71 777 889', rating: 4.4 },
    { id: 52, name: 'Siam Garden', address: 'Ennasr 1, Tunis', cuisineType: { idCuisine: 12, nomCuisine: 'Thai' }, dateOpened: new Date('2022-06-12'), capacity: 60, phoneNumber: '+216 71 777 890', rating: 4.2 },

    // GREEK (13)
    { id: 53, name: 'Ouzeri Santorini', address: 'Gammarth Coast, Tunis', cuisineType: { idCuisine: 13, nomCuisine: 'Greek' }, dateOpened: new Date('2018-06-20'), capacity: 85, phoneNumber: '+216 71 222 111', rating: 4.5 },
    { id: 54, name: 'Zorba The Greek', address: 'La Marsa Plage, Tunis', cuisineType: { idCuisine: 13, nomCuisine: 'Greek' }, dateOpened: new Date('2020-09-15'), capacity: 50, phoneNumber: '+216 71 222 112', rating: 4.3 },
    { id: 55, name: 'Acropolis Taverna', address: 'Avenue Habib Bourguiba, Sousse', cuisineType: { idCuisine: 13, nomCuisine: 'Greek' }, dateOpened: new Date('2022-01-30'), capacity: 65, phoneNumber: '+216 73 222 113', rating: 4.1 },

    // VIETNAMESE (14)
    { id: 56, name: 'Hanoi Pho', address: 'Rue de Palestine, Tunis', cuisineType: { idCuisine: 14, nomCuisine: 'Vietnamese' }, dateOpened: new Date('2020-03-01'), capacity: 35, phoneNumber: '+216 71 888 999', rating: 4.6 },
    { id: 57, name: 'Saigon Kitchen', address: 'Les Berges du Lac 2, Tunis', cuisineType: { idCuisine: 14, nomCuisine: 'Vietnamese' }, dateOpened: new Date('2021-07-18'), capacity: 45, phoneNumber: '+216 71 888 000', rating: 4.4 },
    { id: 58, name: 'Mekong Express', address: 'Menzah 6, Tunis', cuisineType: { idCuisine: 14, nomCuisine: 'Vietnamese' }, dateOpened: new Date('2022-09-10'), capacity: 30, phoneNumber: '+216 71 888 001', rating: 4.2 },

    // KOREAN (15)
    { id: 59, name: 'Seoul BBQ', address: 'Avenue Hédi Nouira, Ennasr 2', cuisineType: { idCuisine: 15, nomCuisine: 'Korean' }, dateOpened: new Date('2019-11-11'), capacity: 65, phoneNumber: '+216 71 555 666', rating: 4.7 },
    { id: 60, name: 'Gangnam House', address: 'Les Berges du Lac 1, Tunis', cuisineType: { idCuisine: 15, nomCuisine: 'Korean' }, dateOpened: new Date('2021-05-20'), capacity: 50, phoneNumber: '+216 71 555 667', rating: 4.5 },
    { id: 61, name: 'Hanok Kitchen', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 15, nomCuisine: 'Korean' }, dateOpened: new Date('2022-08-04'), capacity: 40, phoneNumber: '+216 71 555 668', rating: 4.3 },

    // MOROCCAN (16)
    { id: 62, name: 'Palais Tagine', address: 'Medina of Tunis, Tunis', cuisineType: { idCuisine: 16, nomCuisine: 'Moroccan' }, dateOpened: new Date('2013-02-14'), capacity: 110, phoneNumber: '+216 71 444 333', rating: 4.7 },
    { id: 63, name: 'Marrakech Oasis', address: 'Gammarth, Tunis', cuisineType: { idCuisine: 16, nomCuisine: 'Moroccan' }, dateOpened: new Date('2017-10-08'), capacity: 95, phoneNumber: '+216 71 444 334', rating: 4.6 },
    { id: 64, name: 'Dar Fes', address: 'Yasmine Hammamet, Hammamet', cuisineType: { idCuisine: 16, nomCuisine: 'Moroccan' }, dateOpened: new Date('2020-06-25'), capacity: 80, phoneNumber: '+216 72 444 335', rating: 4.4 },

    // BRAZILIAN (17)
    { id: 65, name: 'Rio Churrascaria', address: 'Les Berges du Lac 2, Tunis', cuisineType: { idCuisine: 17, nomCuisine: 'Brazilian' }, dateOpened: new Date('2018-09-12'), capacity: 120, phoneNumber: '+216 71 999 111', rating: 4.6 },
    { id: 66, name: 'Samba Grill', address: 'Gammarth, Tunis', cuisineType: { idCuisine: 17, nomCuisine: 'Brazilian' }, dateOpened: new Date('2021-02-28'), capacity: 100, phoneNumber: '+216 71 999 112', rating: 4.3 },
    { id: 67, name: 'Copacabana Bistro', address: 'Sousse Corniche, Sousse', cuisineType: { idCuisine: 17, nomCuisine: 'Brazilian' }, dateOpened: new Date('2022-11-05'), capacity: 75, phoneNumber: '+216 73 999 113', rating: 4.1 },

    // EGYPTIAN (18)
    { id: 68, name: 'Cairo Corner', address: 'Avenue de Madrid, Tunis', cuisineType: { idCuisine: 18, nomCuisine: 'Egyptian' }, dateOpened: new Date('2016-07-19'), capacity: 60, phoneNumber: '+216 71 666 222', rating: 4.3 },
    { id: 69, name: 'Koshary Express', address: 'Ennasr 1, Tunis', cuisineType: { idCuisine: 18, nomCuisine: 'Egyptian' }, dateOpened: new Date('2019-12-01'), capacity: 40, phoneNumber: '+216 71 666 223', rating: 4.1 },
    { id: 70, name: 'Nile Palace', address: 'Les Berges du Lac, Tunis', cuisineType: { idCuisine: 18, nomCuisine: 'Egyptian' }, dateOpened: new Date('2022-04-15'), capacity: 85, phoneNumber: '+216 71 666 224', rating: 4.5 },

    // PERUVIAN (19)
    { id: 71, name: 'Ceviche Lounge', address: 'Gammarth Beach, Tunis', cuisineType: { idCuisine: 19, nomCuisine: 'Peruvian' }, dateOpened: new Date('2019-05-17'), capacity: 50, phoneNumber: '+216 71 333 888', rating: 4.6 },
    { id: 72, name: 'Lima Kitchen', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 19, nomCuisine: 'Peruvian' }, dateOpened: new Date('2021-08-30'), capacity: 45, phoneNumber: '+216 71 333 889', rating: 4.4 },
    { id: 73, name: 'Inca Flavors', address: 'Les Berges du Lac 2, Tunis', cuisineType: { idCuisine: 19, nomCuisine: 'Peruvian' }, dateOpened: new Date('2023-01-10'), capacity: 60, phoneNumber: '+216 71 333 890', rating: 4.2 },

    // ETHIOPIAN (20)
    { id: 74, name: 'Addis Ababa House', address: 'Avenue de Carthage, Tunis', cuisineType: { idCuisine: 20, nomCuisine: 'Ethiopian' }, dateOpened: new Date('2018-01-15'), capacity: 45, phoneNumber: '+216 71 222 777', rating: 4.5 },
    { id: 75, name: 'Abyssinia Grill', address: 'Lafayette, Tunis', cuisineType: { idCuisine: 20, nomCuisine: 'Ethiopian' }, dateOpened: new Date('2020-10-20'), capacity: 50, phoneNumber: '+216 71 222 778', rating: 4.3 },
    { id: 76, name: 'Lucy Kitchen', address: 'Menzah 5, Tunis', cuisineType: { idCuisine: 20, nomCuisine: 'Ethiopian' }, dateOpened: new Date('2022-05-04'), capacity: 35, phoneNumber: '+216 71 222 779', rating: 4.2 },

    // ALGERIAN (21)
    { id: 77, name: 'El Djazair', address: 'Avenue Habib Bourguiba, Tunis', cuisineType: { idCuisine: 21, nomCuisine: 'Algerian' }, dateOpened: new Date('2015-08-11'), capacity: 80, phoneNumber: '+216 71 111 555', rating: 4.4 },
    { id: 78, name: 'Constantine Flavors', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 21, nomCuisine: 'Algerian' }, dateOpened: new Date('2018-12-05'), capacity: 60, phoneNumber: '+216 71 111 556', rating: 4.3 },
    { id: 79, name: 'Casbah Grill', address: 'Ennasr 2, Tunis', cuisineType: { idCuisine: 21, nomCuisine: 'Algerian' }, dateOpened: new Date('2021-06-30'), capacity: 70, phoneNumber: '+216 71 111 557', rating: 4.2 },

    // GERMAN (22)
    { id: 80, name: 'Zum Goldenen Hirsch', address: 'Les Berges du Lac 1, Tunis', cuisineType: { idCuisine: 22, nomCuisine: 'German' }, dateOpened: new Date('2017-03-25'), capacity: 75, phoneNumber: '+216 71 444 888', rating: 4.3 },
    { id: 81, name: 'Bavaria Haus', address: 'Gammarth, Tunis', cuisineType: { idCuisine: 22, nomCuisine: 'German' }, dateOpened: new Date('2020-01-18'), capacity: 90, phoneNumber: '+216 71 444 889', rating: 4.5 },
    { id: 82, name: 'Berlin Street Food', address: 'Centre Ville, Tunis', cuisineType: { idCuisine: 22, nomCuisine: 'German' }, dateOpened: new Date('2022-07-22'), capacity: 40, phoneNumber: '+216 71 444 890', rating: 4.1 },

    // BELGIAN (23)
    { id: 83, name: 'Le Lion Belge', address: 'La Marsa Ville, Tunis', cuisineType: { idCuisine: 23, nomCuisine: 'Belgian' }, dateOpened: new Date('2016-11-09'), capacity: 55, phoneNumber: '+216 71 777 333', rating: 4.4 },
    { id: 84, name: 'Brussels Bistro', address: 'Les Berges du Lac 2, Tunis', cuisineType: { idCuisine: 23, nomCuisine: 'Belgian' }, dateOpened: new Date('2019-03-14'), capacity: 65, phoneNumber: '+216 71 777 334', rating: 4.5 },
    { id: 85, name: 'Frite & Waffle Co.', address: 'Avenue Habib Bourguiba, Sousse', cuisineType: { idCuisine: 23, nomCuisine: 'Belgian' }, dateOpened: new Date('2021-11-20'), capacity: 35, phoneNumber: '+216 73 777 335', rating: 4.2 },

    // PORTUGUESE (24)
    { id: 86, name: 'Lisbon Grill', address: 'Gammarth, Tunis', cuisineType: { idCuisine: 24, nomCuisine: 'Portuguese' }, dateOpened: new Date('2018-04-02'), capacity: 70, phoneNumber: '+216 71 888 222', rating: 4.5 },
    { id: 87, name: 'Porto Maritime', address: 'Port El Kantaoui, Sousse', cuisineType: { idCuisine: 24, nomCuisine: 'Portuguese' }, dateOpened: new Date('2020-07-15'), capacity: 85, phoneNumber: '+216 73 888 223', rating: 4.3 },
    { id: 88, name: 'O Fado', address: 'La Marsa, Tunis', cuisineType: { idCuisine: 24, nomCuisine: 'Portuguese' }, dateOpened: new Date('2022-10-01'), capacity: 50, phoneNumber: '+216 71 888 224', rating: 4.2 },

    // CARIBBEAN (25)
    { id: 89, name: 'Island Spice Grill', address: 'Les Berges du Lac 1, Tunis', cuisineType: { idCuisine: 25, nomCuisine: 'Caribbean' }, dateOpened: new Date('2019-06-18'), capacity: 60, phoneNumber: '+216 71 999 444', rating: 4.4 },
    { id: 90, name: 'Havana Nights', address: 'Gammarth Coast, Tunis', cuisineType: { idCuisine: 25, nomCuisine: 'Caribbean' }, dateOpened: new Date('2021-01-25'), capacity: 80, phoneNumber: '+216 71 999 445', rating: 4.3 },
    { id: 91, name: 'Kingston Lounge', address: 'La Marsa Plage, Tunis', cuisineType: { idCuisine: 25, nomCuisine: 'Caribbean' }, dateOpened: new Date('2022-08-12'), capacity: 50, phoneNumber: '+216 71 999 446', rating: 4.1 }
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

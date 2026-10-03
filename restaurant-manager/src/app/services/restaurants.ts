import { Service } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Service()
export class RestaurantService {
    restaurants : Restaurant[] =[
  {
    id: 1,
    name: "Resto ISET",
    address: "ISET Campus, Jedeida",
    cuisineType: "Tunisian",
    dateOpened: new Date("2021-09-15"),
    capacity: 120,
    phoneNumber: "+216 71 123 456",
    rating: 4.2,
  },
  {
    id: 2,
    name: "Le Medina Flavor",
    address: "Rue de la Grande Mosquée, Tunis",
    cuisineType: "Tunisian",
    dateOpened: new Date("2018-05-10"),
    capacity: 85,
    phoneNumber: "+216 71 987 654",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Olive & Spice Grill",
    address: "Avenue Habib Bourguiba, Ariana",
    cuisineType: "Mediterranean",
    dateOpened: new Date("2022-11-01"),
    capacity: 150,
    phoneNumber: "+216 70 555 123",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Sidi Bou Oasis",
    address: "Corniche Road, Sidi Bou Said",
    cuisineType: "Seafood & Grill",
    dateOpened: new Date("2019-03-20"),
    capacity: 200,
    phoneNumber: "+216 71 333 888",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Atlas Bites",
    address: "Zone Industrielle, Manouba",
    cuisineType: "Traditional",
    dateOpened: new Date("2023-01-12"),
    capacity: 60,
    phoneNumber: "+216 71 444 999",
    rating: 3.9,
  },
];

restaurantsList() : Restaurant[]
{
    return this.restaurants;
}

addRestaurant(r : Restaurant)
{
    this.restaurants.push(r);
}
removeRestaurant(r : Restaurant)
{
    const index = this.restaurants.indexOf(r, 0);
    if (index > -1){
        this.restaurants.splice(index, 1);
    }
}

getRestoById(id : number): Restaurant
{
  return this.restaurants.find((r) => r.id == id)!;
}
updateResto(r : Restaurant)
{
  const index = this.restaurants.indexOf(r, 0);
  if(index > -1)
  {
    this.restaurants.splice(index, 1);
    this.restaurants.splice(index, 0 , r)
  }
}


}

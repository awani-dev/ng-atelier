import { CuisineType } from "./cuisine-type";


export class Restaurant {
    id? : number;
    name? : string;
    address?: string;
    cuisineType?: CuisineType;
    dateOpened? : Date;
    capacity? : number;
    phoneNumber? : string;
    rating? : number;
}

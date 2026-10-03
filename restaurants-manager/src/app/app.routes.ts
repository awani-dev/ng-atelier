import { Routes } from '@angular/router';
import { Restaurants } from './restaurants/restaurants';
import { AddResto } from './add-resto/add-resto';
import { UpdateResto } from './update-resto/update-resto';

export const routes: Routes = [
  { path: 'restaurants', component: Restaurants },
  { path: 'add-resto', component: AddResto },
  { path: 'update-resto/:id', component: UpdateResto },
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
];

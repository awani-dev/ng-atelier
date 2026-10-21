import { Routes } from '@angular/router';
import { Restaurants } from './restaurants/restaurants';
import { AddResto } from './add-resto/add-resto';
import { UpdateResto } from './update-resto/update-resto';
import { RechercheParCategorie } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
  { path: 'restaurants', component: Restaurants },
  { path: 'add-resto', component: AddResto },
  { path: 'update-resto/:id', component: UpdateResto },
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  {path: "rechercheParCategorie", component : RechercheParCategorie},
  {path: "rechercheParNom", component : RechercheParNom},
];

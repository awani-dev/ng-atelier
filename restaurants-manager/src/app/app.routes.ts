import { Routes } from '@angular/router';
import { Restaurants } from './restaurants/restaurants';
import { AddResto } from './add-resto/add-resto';
import { UpdateResto } from './update-resto/update-resto';
import { RechercheParCategorie } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { restoGuard } from './resto-guard';

export const routes: Routes = [
  { path: 'restaurants', component: Restaurants },
  { path: 'update-resto/:id', component: UpdateResto },
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  {path: "rechercheParCategorie", component : RechercheParCategorie},
  {path: "rechercheParNom", component : RechercheParNom},
  {path: 'login', component: Login},
  {path: 'app-forbidden', component: Forbidden},
  {path: "add-resto", component : AddResto, canActivate:[restoGuard]},
];

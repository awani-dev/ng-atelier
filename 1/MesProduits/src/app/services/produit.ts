import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  apiURL: string = 'http://localhost:8090/produits/api';
  produits: Produit[] = [];

  constructor(private http: HttpClient) {}

  getProduits(): Produit[] {
    return this.produits;
  }

  setProduits(prods: Produit[]): void {
    this.produits = prods;
  }

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }
  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }
  supprimerProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }
  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiURL, prod, httpOptions);
  }
  /*
  produit!: Produit;
  produits: Produit[] = [
    {
      idProduit: 1,
      nomProduit: 'Lenovo Laptop',
      prixProduit: 1000,
      dateCreation: new Date(Date.now()),
    },
    {
      idProduit: 2,
      nomProduit: 'Iphone 18 pro',
      prixProduit: 1200,
      dateCreation: new Date(Date.now()),
    },
    {
      idProduit: 3,
      nomProduit: 'Samsung Galaxy S30',
      prixProduit: 800,
      dateCreation: new Date(Date.now()),
    },
  ];

  listeProduits(): Produit[] {
    return this.produits;
  }

 
 supprimerProduit(p: Produit) {
    const index = this.produits.indexOf(p, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }

  consulterProduit(id: number): Produit {
    this.produit = this.produits.find((p) => p.idProduit == id)!;
    return this.produit;
  }

  updateProduit(prod: Produit) {
    //chercher le produit prod du tableau produits

    const index = this.produits.indexOf(prod, 0);

    if (index > -1) {
      this.produits.splice(index, 1); //supprimer l'ancien éléments
      
      this.produits.splice(index, 0, prod); // insérer le nouvel élément
    }
  }
  */
}

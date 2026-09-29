import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
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

  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
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
}

import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { RouterLink } from '@angular/router';

@Component({
  imports: [DatePipe, CommonModule, RouterLink],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
  produits: Produit[] = [];
  constructor(private produitService: ProduitService) {
    this.produits =  this.produitService.getProduits();
  }

  ngOnInit(): void {
    this.chargerProduits();
    
  }
  chargerProduits() {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.produitService.setProduits(prods);
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduits();
      });
  }
  /*
  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.produitService.supprimerProduit(p);
    console.log(p);
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

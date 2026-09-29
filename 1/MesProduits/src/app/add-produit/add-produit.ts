import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-produit',
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();


  constructor(private produitService: ProduitService, private router: Router) {}

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);

  }



  ngOnInit(): void {}
}

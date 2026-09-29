import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit';


@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.html',
  styles: ``,
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();
  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router : Router,

  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id'],
    );
    console.log(this.currentProduit);
  }
  updateProduit()
{ //console.log(this.currentProduit);
this.produitService.updateProduit(this.currentProduit);
this.router.navigate(['produits']);
}
}

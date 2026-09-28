import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits {
  produits : string[];
  constructor() {
    this.produits = ["Lenovo Laptop", "Iphone 18 pro", "Samsung Galaxy S30"];
  }
 }

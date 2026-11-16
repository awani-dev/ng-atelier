import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CuisineType } from '../models/cuisine-type';

@Component({
  imports: [FormsModule],
  selector: 'app-update-cuisine-type',
  templateUrl: './update-cuisine-type.html',
})
export class UpdateCuisineType implements OnChanges {
  @Input() cuisineType: CuisineType = { idCuisine: 0, nomCuisine: '' };
  @Input() ajout = true;
  @Output() cuisineTypeSaved = new EventEmitter<CuisineType>();

  draft: CuisineType = { idCuisine: 0, nomCuisine: '' };

  ngOnChanges(): void {
    this.draft = { ...this.cuisineType };
  }

  saveCuisineType(): void {
    const nomCuisine = this.draft.nomCuisine.trim();
    if (!nomCuisine) return;

    this.cuisineTypeSaved.emit({ ...this.draft, nomCuisine });
  }
}
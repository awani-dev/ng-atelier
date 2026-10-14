import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurants';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-update-resto',
  templateUrl: './update-resto.html',
})
export class UpdateResto {
  currentResto! : Restaurant;
  constructor(private restoService : RestaurantService, private router : Router, private activatedRoute : ActivatedRoute){};

  ngOnInit()
  {
    this.currentResto = this.restoService.getRestoById( this.activatedRoute.snapshot.params['id']);
  }

  updateResto()
  {
    this.restoService.updateResto(this.currentResto);
    this.router.navigate(['restaurants']);
  }
  
}

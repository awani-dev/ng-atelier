# fix-restaurants-manager.ps1
# Run from the project root (the folder containing "src"):
#   powershell -ExecutionPolicy Bypass -File .\fix-restaurants-manager.ps1
# Existing files are backed up as <file>.bak before being overwritten.

param(
    [string]$AppRoot = ".\src\app"
)

$utf8 = New-Object System.Text.UTF8Encoding($false)

if (-not (Test-Path $AppRoot)) { throw "Folder not found: $AppRoot (run from the project root)" }

function Write-ProjectFile($relativePath, $content) {
    $full = Join-Path $AppRoot $relativePath
    $dir  = Split-Path $full -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    if (Test-Path $full) { Copy-Item $full "$full.bak" -Force }
    [IO.File]::WriteAllText($full, $content.TrimStart("`r","`n") , $utf8)
    Write-Host "Written: $full" -ForegroundColor Green
}

# ---------------------------------------------------------------- models
Write-ProjectFile "models\cuisine-type.ts" @'
export class CuisineType {
  id!: number;
  name!: string;
}
'@

Write-ProjectFile "models\restaurant.ts" @'
import { CuisineType } from './cuisine-type';

export class Restaurant {
  id?: number;
  name?: string;
  address?: string;
  cuisineType?: CuisineType;
  dateOpened?: Date;
  capacity?: number;
  phoneNumber?: string;
  rating?: number;
}
'@

# ---------------------------------------------------------------- service
Write-ProjectFile "services\restaurants.ts" @'
import { Service } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { CuisineType } from '../models/cuisine-type';

@Service()
export class RestaurantService {
  cuisineTypes: CuisineType[] = [
    { id: 1, name: 'Tunisian' },
    { id: 2, name: 'Mediterranean' },
    { id: 3, name: 'Seafood & Grill' },
    { id: 4, name: 'Traditional' },
  ];

  restaurants: Restaurant[] = [
    { id: 1, name: 'Resto ISET', address: 'ISET Campus, Jedeida', cuisineType: this.cuisineTypes[0],
      dateOpened: new Date('2021-09-15'), capacity: 120, phoneNumber: '+216 71 123 456', rating: 4.2 },
    { id: 2, name: 'Le Medina Flavor', address: 'Rue de la Grande Mosquée, Tunis', cuisineType: this.cuisineTypes[0],
      dateOpened: new Date('2018-05-10'), capacity: 85, phoneNumber: '+216 71 987 654', rating: 4.8 },
    { id: 3, name: 'Olive & Spice Grill', address: 'Avenue Habib Bourguiba, Ariana', cuisineType: this.cuisineTypes[1],
      dateOpened: new Date('2022-11-01'), capacity: 150, phoneNumber: '+216 70 555 123', rating: 4.5 },
    { id: 4, name: 'Sidi Bou Oasis', address: 'Corniche Road, Sidi Bou Said', cuisineType: this.cuisineTypes[2],
      dateOpened: new Date('2019-03-20'), capacity: 200, phoneNumber: '+216 71 333 888', rating: 4.9 },
    { id: 5, name: 'Atlas Bites', address: 'Zone Industrielle, Manouba', cuisineType: this.cuisineTypes[3],
      dateOpened: new Date('2023-01-12'), capacity: 60, phoneNumber: '+216 71 444 999', rating: 3.9 },
  ];

  restaurantsList(): Restaurant[] {
    return this.restaurants;
  }

  addRestaurant(r: Restaurant) {
    this.restaurants.push(r);
  }

  removeRestaurant(r: Restaurant) {
    const index = this.restaurants.indexOf(r, 0);
    if (index > -1) {
      this.restaurants.splice(index, 1);
    }
  }

  getRestoById(id: number): Restaurant {
    return this.restaurants.find((r) => r.id == id)!;
  }

  updateResto(r: Restaurant) {
    const index = this.restaurants.findIndex((x) => x.id == r.id);
    if (index > -1) {
      this.restaurants[index] = r;
    }
  }

  listCuisineTypes(): CuisineType[] {
    return this.cuisineTypes;
  }

  getCuisineTypeById(id: number): CuisineType {
    return this.cuisineTypes.find((c) => c.id == id)!;
  }
}
'@

# ---------------------------------------------------------------- update-resto
Write-ProjectFile "update-resto\update-resto.ts" @'
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { CuisineType } from '../models/cuisine-type';
import { RestaurantService } from '../services/restaurants';

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-update-resto',
  templateUrl: './update-resto.html',
})
export class UpdateResto implements OnInit {
  currentResto!: Restaurant;
  cuisineTypes!: CuisineType[];
  updatedCuisineTypeId?: number;

  constructor(
    private restoService: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cuisineTypes = this.restoService.listCuisineTypes();
    const id = Number(this.activatedRoute.snapshot.params['id']);
    // work on a copy so nothing changes until "Modify" is clicked
    this.currentResto = { ...this.restoService.getRestoById(id) };
    this.updatedCuisineTypeId = this.currentResto.cuisineType?.id;
  }

  setDate(value: string) {
    this.currentResto.dateOpened = value ? new Date(value) : undefined;
  }

  updateResto() {
    if (this.updatedCuisineTypeId != null) {
      this.currentResto.cuisineType = this.restoService.getCuisineTypeById(this.updatedCuisineTypeId);
    }
    this.restoService.updateResto(this.currentResto);
    this.router.navigate(['restaurants']);
  }
}
'@

Write-ProjectFile "update-resto\update-resto.html" @'
<div class="container">
  <div>
    <h2>Restaurant :</h2>
  </div>
  <form (ngSubmit)="updateResto()">
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>ID</label>
      <input type="number" [(ngModel)]="currentResto.id" name="id" class="form-control" readonly />
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>Name</label>
      <input type="text" [(ngModel)]="currentResto.name" name="name" class="form-control" />
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>Address</label>
      <input type="text" [(ngModel)]="currentResto.address" name="address" class="form-control" />
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>Cuisine</label>
      <select class="form-control" name="cuisineType" [(ngModel)]="updatedCuisineTypeId">
        @for (c of cuisineTypes; track c.id) {
          <option [ngValue]="c.id">{{ c.name }}</option>
        }
      </select>
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>Open Date</label>
      <input
        type="date"
        [ngModel]="currentResto.dateOpened | date: 'yyyy-MM-dd'"
        (ngModelChange)="setDate($event)"
        name="dateOpened"
        class="form-control"
      />
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>Capacity</label>
      <input type="number" [(ngModel)]="currentResto.capacity" name="capacity" class="form-control" />
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>Phone Number</label>
      <input type="text" [(ngModel)]="currentResto.phoneNumber" name="phoneNumber" class="form-control" />
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2">
      <label>Rating</label>
      <input type="number" [(ngModel)]="currentResto.rating" name="rating" class="form-control" />
    </div>

    <div class="mt-2">
      <button type="submit" class="btn btn-success">Modify</button>
    </div>
  </form>
</div>
'@

# ---------------------------------------------------------------- restaurants list
Write-ProjectFile "restaurants\restaurants.html" @'
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Cuisine</th>
      <th scope="col">Open Date</th>
      <th scope="col">Capacity</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Rating</th>
      <th scope="col" colspan="2">Actions</th>
    </tr>
  </thead>
  <tbody>
    @for (resto of restaurantsList; track resto.id) {
      <tr>
        <th scope="row">{{ resto.id }}</th>
        <td>{{ resto.name }}</td>
        <td>{{ resto.address }}</td>
        <td>{{ resto.cuisineType?.name }}</td>
        <td>{{ resto.dateOpened | date: 'dd/MM/yyyy' }}</td>
        <td>{{ resto.capacity }}</td>
        <td>{{ resto.phoneNumber }}</td>
        <td>{{ resto.rating }}</td>
        <td><button type="button" class="btn btn-danger" (click)="rmResto(resto)">Remove</button></td>
        <td><a class="btn btn-success" [routerLink]="['/update-resto', resto.id]">Modify</a></td>
      </tr>
    } @empty {
      <tr>
        <th scope="row" colspan="10">No Restaurants</th>
      </tr>
    }
  </tbody>
</table>
'@

# ---------------------------------------------------------------- add-resto
$addTs = Get-ChildItem -Path $AppRoot -Recurse -File -Filter "add-resto.ts" | Select-Object -First 1
$addDir = if ($addTs) { $addTs.DirectoryName } else { Join-Path $AppRoot "add-resto" }
$addRel = $addDir.Substring((Resolve-Path $AppRoot).Path.Length).TrimStart('\','/')

Write-ProjectFile "$addRel\add-resto.ts" @'
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { CuisineType } from '../models/cuisine-type';
import { RestaurantService } from '../services/restaurants';

@Component({
  imports: [FormsModule],
  selector: 'app-add-resto',
  templateUrl: './add-resto.html',
})
export class AddResto implements OnInit {
  newResto = new Restaurant();
  cuisineTypes!: CuisineType[];
  newCuisineTypeId?: number;

  constructor(private restaurantService: RestaurantService, private route: Router) {}

  ngOnInit() {
    this.cuisineTypes = this.restaurantService.listCuisineTypes();
  }

  addResto() {
    if (this.newCuisineTypeId != null) {
      this.newResto.cuisineType = this.restaurantService.getCuisineTypeById(this.newCuisineTypeId);
    }
    this.restaurantService.addRestaurant(this.newResto);
    this.route.navigate(['restaurants']);
  }
}
'@

# add-resto.html was not provided, so patch it: replace the cuisine <input> by a <select>
$addHtml = Join-Path $addDir "add-resto.html"
if (Test-Path $addHtml) {
    $html = [IO.File]::ReadAllText($addHtml)
    $rx = [regex]'<input[^>]*newResto\.cuisineType[^>]*>'
    if ($html -match 'newCuisineTypeId') {
        Write-Host "add-resto.html already patched." -ForegroundColor Yellow
    } elseif ($rx.IsMatch($html)) {
        $select = @'
<select class="form-control" name="cuisineType" [(ngModel)]="newCuisineTypeId">
        @for (c of cuisineTypes; track c.id) {
          <option [ngValue]="c.id">{{ c.name }}</option>
        }
      </select>
'@
        Copy-Item $addHtml "$addHtml.bak" -Force
        $html = $rx.Replace($html, $select.TrimEnd(), 1)
        [IO.File]::WriteAllText($addHtml, $html, $utf8)
        Write-Host "Patched: $addHtml" -ForegroundColor Green
    } else {
        Write-Warning "add-resto.html: cuisine <input> not found. Replace it manually with a <select [(ngModel)]=""newCuisineTypeId""> over cuisineTypes."
    }
} else {
    Write-Warning "add-resto.html not found. Add the cuisine <select> manually."
}

Write-Host "`nDone. Compare with the .bak files if you want to review the changes." -ForegroundColor Cyan
Write-Host "Reminder: if add-resto.html has a date input bound to a Date, it needs the same yyyy-MM-dd handling as update-resto." -ForegroundColor Yellow

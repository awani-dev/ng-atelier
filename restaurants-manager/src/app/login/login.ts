import { Component } from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {
  user = new User();
  erreur: boolean = false;

  constructor(
    private authService: Auth,
    private router: Router,
  ) {}

  onLoggedin() {
    this.authService.SignIn(this.user).subscribe(isValidUser => {
      if (isValidUser) this.router.navigate(['/']);
      else this.erreur = true;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Auth {
  public loggedUser = '';
  public isloggedIn = false;
  public roles: string[] = [];

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  logout() {
    this.isloggedIn = false;
    this.loggedUser = '';
    this.roles = [];
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('roles');
    localStorage.removeItem('isloggedIn');
    this.router.navigate(['/login']);
  }

  SignIn(user: User) {
    return this.http.post<{ username: string; roles: string[] }>('http://localhost:8090/api/auth/login', user).pipe(
      map(response => {
        this.loggedUser = response.username;
        this.isloggedIn = true;
        this.roles = response.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('roles', JSON.stringify(this.roles));
        localStorage.setItem('isloggedIn', 'true');
        return true;
      }),
      catchError(() => of(false)),
    );
  }

  isAdmin(): boolean {
    return this.roles.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    try {
      this.roles = JSON.parse(localStorage.getItem('roles') ?? '[]') as string[];
    } catch {
      this.roles = [];
    }
  }
}

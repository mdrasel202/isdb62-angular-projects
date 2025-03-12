import { Injectable } from '@angular/core';
import { User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {

  constructor() { }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }

}

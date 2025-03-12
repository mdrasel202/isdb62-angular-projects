import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  login(
    userEmail: string,
    userPassword: string

  ): boolean {

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.userEmail === userEmail && u.userPassword === userPassword);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }

    return false;

  }

}

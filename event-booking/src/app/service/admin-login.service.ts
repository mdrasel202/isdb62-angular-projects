import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  // Define hardcoded admin credentials (you can modify them to your requirements)
  private adminCredentials = {
    isAdmin: true,
    userId: '123456',
    userName: 'Admin',
    userEmail: 'admin@mail.com',
    userPassword: '123'
  };

  constructor() { }

  // Method to verify admin credentials
  validateAdminCredentials(email: string, password: string): boolean {
    const adminLogin = (email === this.adminCredentials.userEmail && password === this.adminCredentials.userPassword);
    
    if (adminLogin) {
      // Store the admin credentials object in localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(this.adminCredentials));
      return true;
    }
    return false;
  }
}

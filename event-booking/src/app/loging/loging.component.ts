import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { AdminLoginService } from '../service/admin-login.service';

@Component({
  selector: 'app-loging',
  imports: [FormsModule],
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.css'
})
export class LogingComponent {
  userEmail: string = "";
  userPassword: string = "";
  adminEmail: string = "";
  adminPassword: string = "";

  constructor(
    private loginService: LoginServiceService,
    private adminLoginService: AdminLoginService
  ) {}

  login() {
    if (this.loginService.login(this.userEmail, this.userPassword)) {
      alert("Login successful!");
      // window.location.reload();
      window.location.href="event-page";

    } else {
      alert("Error: Login failed!");
    }
  }

  // Admin login
  adminLogin() {
    if (this.adminLoginService.validateAdminCredentials(this.adminEmail, this.adminPassword)) {
      alert("Admin login successful!");
      // Redirect to admin dashboard or admin-specific page
      window.location.href = "/booking-list"; // Modify to actual admin page
    } else {
      alert("Error: Admin login failed!");
    }
  }

}

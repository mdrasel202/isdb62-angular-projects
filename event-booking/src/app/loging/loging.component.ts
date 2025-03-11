import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-loging',
  imports: [FormsModule],
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.css'
})
export class LogingComponent {
  userEmail: string = "";
  userPassword: string = "";

  constructor(
    private loginService: LoginServiceService
  ) {}

  login() {
    if (this.loginService.login(this.userEmail, this.userPassword)) {
      alert("Login successful!");

    } else {
      alert("Error: Login failed!");
    }
  }

}

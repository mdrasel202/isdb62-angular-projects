import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  userName: string = "";
  userEmail: string = "";
  userPassword: string = "";

  constructor(
    private registerService: RegisterServiceService
  ) {}

  register() {

    const register = this.registerService.register(
      {
        userName: this.userName,
        userEmail: this.userEmail,
        userPassword: this.userPassword
      }
    );

    if (register) {
      alert("Registration successful!");
      this.userName = "";
      this.userEmail = "";
      this.userPassword = "";

    } else {
      alert("Email already used! Try with another email...")
    }


  }

}

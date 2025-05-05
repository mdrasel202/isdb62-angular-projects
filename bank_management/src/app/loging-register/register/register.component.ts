import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterRequest, UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [NgIf, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  showOverlay = true;

  closeOverlay() {
    this.showOverlay = false;
  }
//registration
user: RegisterRequest = {
  email: '',
  password: '',
  role: 'USER',
  firstName: '',
  lastName: '',
  phone: ''
};
// confirmPassword = '';
registrationSuccess = false;
registrationError = '';

constructor(
  private router: Router,
  private userService: UserService,
) { }

onSubmit() {
  // debugger;
  // if (this.user.password === this.confirmPassword) {
    this.userService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.registrationSuccess = true;
        this.registrationError = '';
        alert('Registration successful! Please log in.');
        this.router.navigate(['/loging']);
      },
      error: (error: Error) => {
        console.error('Registration error:', error.message);
        this.registrationError = error.message;
        this.registrationSuccess = false;
        alert(error.message);
      },
    });
  // } else {
  //   this.registrationError = 'Passwords do not match.';
  //   this.registrationSuccess = false;
  //   alert('Passwords do not match.');
  // }
}
}

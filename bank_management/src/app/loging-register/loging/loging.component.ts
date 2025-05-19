import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loging',
  imports: [NgIf, RouterLink, FormsModule],
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.css'
})
export class LogingComponent {

  showOverlay = true;

  closeOverlay() {
    this.showOverlay = false;
  }

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.access_token);
          localStorage.setItem('id', res.id);
          //localStorage.setItem('role', res.role)
          //const role = localStorage.getItem('role');
          const role = this.auth.getUserRole();

          //role based navigation
          switch(role){
            case 'admin':
              window.location.href="/admin";

              break;

            case 'user':
              window.location.href="/user";
              break;

            default:
              alert('Unknow role. Please contact support.');  
          }
        },
        error: (error) => {
          alert('Invalid credentials')
          console.log(error)
        }
      });
  }
}

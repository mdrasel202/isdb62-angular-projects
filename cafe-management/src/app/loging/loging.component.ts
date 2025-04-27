import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../modal/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Register } from '../model/register';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-loging',
  imports: [FormsModule, NgFor],
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.css'
})
export class LogingComponent {

  register: Register = new Register('', '', '', '', '', '');
  role: String[] = ['ADMIN', 'TEACHER', 'STUDENT'];


  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  onSignUp(): void {
    this.containerRef.nativeElement.classList.add('right-panel-active');
  }

  onSignIn(): void {
    this.containerRef.nativeElement.classList.remove('right-panel-active');
  }

  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router){}

  onLogin(){
    this.auth.login({email: this.email, password: this.password})
    .subscribe({
      next: (res) => {
        this.auth.setToken(res.access_token);
        this.router.navigate(['/admin']);
      },
      
        error: (error) =>{
          alert('Invalid credentials')
          console.log(error)
        }
      
    });
  }

  onRegister(){
    this.auth.signUp(this.register)
    .subscribe({
      next: () => {
        alert('Register successfully.');
        this.register = new Register('', '', '', '', '', '');
        this.router.navigate(['/loging']);
      },
      
        error: (error) =>{
          alert('Registration failed.');
          console.log(error);
        }
      
    });
  }
}

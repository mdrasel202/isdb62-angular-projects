import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  showOverlay = true;

  closeOverlay() {
    this.showOverlay = false;
  }
}

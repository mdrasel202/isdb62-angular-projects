import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [NgIf],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  dropdownopen = false;

  toggleDropdown(){
    this.dropdownopen = !this.dropdownopen;
  }

}

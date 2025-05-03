import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  imports: [NgIf],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
  dropdownopen = false;


  toggleDropdown(){
    this.dropdownopen =! this.dropdownopen;
  }

}

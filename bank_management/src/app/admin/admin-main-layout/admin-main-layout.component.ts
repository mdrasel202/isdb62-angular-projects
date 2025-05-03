import { Component } from '@angular/core';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminProfileComponent } from "../admin-profile/admin-profile.component";

@Component({
  selector: 'app-admin-main-layout',
  imports: [AdminSideBarComponent, RouterOutlet, AdminProfileComponent],
  templateUrl: './admin-main-layout.component.html',
  styleUrl: './admin-main-layout.component.css'
})
export class AdminMainLayoutComponent {

}

import { Component } from '@angular/core';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-main-layout',
  imports: [AdminSideBarComponent, RouterOutlet],
  templateUrl: './admin-main-layout.component.html',
  styleUrl: './admin-main-layout.component.css'
})
export class AdminMainLayoutComponent {

}

import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: 'app-main-layout',
  imports: [SideBarComponent, RouterOutlet, UserProfileComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}

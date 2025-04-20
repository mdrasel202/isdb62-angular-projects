import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-view-controller',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './user-view-controller.component.html',
  styleUrl: './user-view-controller.component.css'
})
export class UserViewControllerComponent {

}

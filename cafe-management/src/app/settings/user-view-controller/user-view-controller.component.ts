import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-user-view-controller',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './user-view-controller.component.html',
  styleUrl: './user-view-controller.component.css'
})
export class UserViewControllerComponent {

}

import { Component } from '@angular/core';
import { NavbarComponent } from "../../home/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../home/footer/footer.component";

@Component({
  selector: 'app-home-view-controller',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './home-view-controller.component.html',
  styleUrl: './home-view-controller.component.css'
})
export class HomeViewControllerComponent {

}

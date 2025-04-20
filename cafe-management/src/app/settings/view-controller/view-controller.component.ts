import { Component } from '@angular/core';
import { MenuBarComponent } from "../../menu-bar/menu-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-controller',
  imports: [MenuBarComponent, RouterOutlet],
  templateUrl: './view-controller.component.html',
  styleUrl: './view-controller.component.css'
})
export class ViewControllerComponent {

}

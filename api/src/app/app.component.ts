import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HarryPotterComponent } from "./harry-potter/harry-potter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HarryPotterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';
}

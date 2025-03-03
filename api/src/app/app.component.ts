import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HarryPotterComponent } from "./harry-potter/harry-potter.component";
import { HeaderComponent } from "./header/header.component";
import { ApiComponent } from "./api/api.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';
}

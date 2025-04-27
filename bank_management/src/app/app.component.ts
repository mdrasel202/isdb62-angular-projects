import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from "./user-admin/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bank_management';
}

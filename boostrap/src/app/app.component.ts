import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl:'./app.component.html',
  // template:`
  //   <div class="container">
  //     <app-header></app-header>
  //     <app-content></app-content>
  //     <app-footer></app-footer>
  //   </div>
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boostrap';
  
}

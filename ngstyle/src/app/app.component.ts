import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngstyle';

  newStyle: User[] = [
    {
      Title: "This is heading",
      Name: "Himu Bakar Khan",
      Age: "0.1",
      Address: "New Bakor Para (Charman)",
      Active: true
    },

    {
      Title: "This is heading 2",
      Name: "Omor (Back-pison side) Programar",
      Age: "0.01",
      Address: "Back (Pasa para sodosho)",
      Active: false
    }
  ]

}

export interface User {
  Title: string;
  Name: string;
  Age: string;
  Address: string;
  Active: boolean;
}



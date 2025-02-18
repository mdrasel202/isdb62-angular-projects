import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  user = [
    {
      name: "Ashik",
      age: 42,
      city: "Bangladesh",
      profiePic : 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk'
    },
    {
      name: "Himu",
      age: 62,
      city: "Borishaila",
      profiePic : 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk'
    }
  ]
}

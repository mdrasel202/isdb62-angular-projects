import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// keypressed = '';
//   show(){
//     const target = document.getElementById('input') as HTMLTextAreaElement;
//     this.keypressed = target.value;
//   }

keypressed = '';

show(textarea: HTMLTextAreaElement) {
  this.keypressed = textarea.value;
}
}

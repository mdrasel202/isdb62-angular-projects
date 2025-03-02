import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-birthday',
  imports: [FormsModule],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {
  name: string = '';
  attendance: string = 'yes';

  onSubmit() {
    alert(`RSVP submitted! Name: ${this.name}, Attending: ${this.attendance}`);
  }
}

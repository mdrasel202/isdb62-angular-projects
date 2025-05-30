import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventFormComponent } from '../../event-form/event-form.component';

@Component({
  selector: 'app-wedding',
  imports: [FormsModule, EventFormComponent],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.css'
})
export class WeddingComponent {
  name: string = '';
  attendance: string = 'yes';

  onSubmit() {
    alert(`RSVP submitted! Name: ${this.name}, Attending: ${this.attendance}`);
  }
}

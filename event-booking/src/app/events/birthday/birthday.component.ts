import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventFormComponent } from '../../event-form/event-form.component';

@Component({
  selector: 'app-birthday',
  imports: [FormsModule, EventFormComponent],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {
  
}

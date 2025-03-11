import { Component } from '@angular/core';
import { EventFormComponent } from '../../event-form/event-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conference',
  imports: [FormsModule,EventFormComponent],
  templateUrl: './conference.component.html',
  styleUrl: './conference.component.css'
})
export class ConferenceComponent {

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {

  }
  
}

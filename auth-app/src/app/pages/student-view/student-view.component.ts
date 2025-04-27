import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-view',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.scss'
})
export class StudentViewComponent {
  resources: { [key: string]: string } = {};
  resourceKeys: string[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources() {
    this.studentService.getResources().subscribe({
      next: (data) => {
        this.resources = data;
        this.resourceKeys = Object.keys(data); // <== create keys here
      },
      error: (err) => {
        console.error('Failed to load resources:', err);
      }
    });
  }
}


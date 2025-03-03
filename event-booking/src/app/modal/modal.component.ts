import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

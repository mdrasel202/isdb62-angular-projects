import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loging',
  imports: [],
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.css'
})
export class LogingComponent {
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  onSignUp(): void {
    this.containerRef.nativeElement.classList.add('right-panel-active');
  }

  onSignIn(): void {
    this.containerRef.nativeElement.classList.remove('right-panel-active');
  }
}

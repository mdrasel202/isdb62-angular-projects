import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoanRequest } from '../../model/bank_loan.model';
import { LoanService } from '../../service/loan.service';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  
}

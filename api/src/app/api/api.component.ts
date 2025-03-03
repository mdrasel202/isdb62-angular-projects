import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servic/api.service';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{

constructor(private apiService: ApiService){}

str : String = '';

  ngOnInit(): void {
    this.apiService.userApi().subscribe(data =>{
      console.log(data);
      this.str = data;    })
  }

}

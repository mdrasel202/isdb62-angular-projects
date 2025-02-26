import { Component, OnInit } from '@angular/core';
import { HarryService } from '../services/harry.service';

@Component({
  selector: 'app-harry-potter',
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css'
})
export class HarryPotterComponent implements OnInit{

  spells: any[]=[];

  constructor(private harryService: HarryService){}

  ngOnInit(): void {
    console.log('Harry Potter');
    this.fetchSpells();
  }

  getSpells(){
    this.harryService.getSpells().subscribe(spells => this.spells = spells);
  }

  fetchSpells(){
    this.harryService.getSpells().subscribe(
      (data) =>{
        this.spells = data;
      console.log('Fetched spells :' , this.spells);
      }
    )
  }

}

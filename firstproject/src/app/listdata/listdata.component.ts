import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listdata',
  imports: [],
  templateUrl: './listdata.component.html',
  styleUrl: './listdata.component.css'
})
export class ListdataComponent implements OnInit{
  users: User[] = [];

  constructor (private rouuer: Router){}

  ngOnInit() {
      this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  editUser(user : User){
    this.rouuer.navigate(['/formdata'], {state: {user}});
  }

  deleteSource(user: User){
    if(confirm("Are you sure to delete?")){
      this.users = this.users.filter(x => x !== user);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formdata',
  imports: [FormsModule],
  templateUrl: './formdata.component.html',
  styleUrl: './formdata.component.css'
})
export class FormdataComponent implements OnInit{
   user: User = new User('', 0 , '', '');

  ngOnInit(): void {
    console.log('FormdataComponent');

    //write a text to local storage
    localStorage.setItem('name', 'john');
    localStorage.setItem('age', '25');
    localStorage.setItem('phone', '12345687965');
    localStorage.setItem('address', 'mirpur');

  }

  onSubmit(){
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.user);

    localStorage.setItem('users', JSON.stringify(users));

    this.user = new User('', 0, '', '');
    alert('User added successfully!');
  }
    
}

import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-formdata',
  imports: [FormsModule],
  templateUrl: './formdata.component.html',
  styleUrl: './formdata.component.css'
})
export class FormdataComponent {
   user: User = new User('', 0 , '', '');
   isUpdate = false;

   constructor(private router : Router){
    const nav = this.router.getCurrentNavigation();
    if(nav?.extras.state && nav.extras.state['user']){
      this.user = nav.extras.state['user'];
      this.isUpdate = true;
    }
   }

  ngOnInit(): void {
    // console.log('FormdataComponent');

    // //write a text to local storage
    // localStorage.setItem('name', 'john');
    // localStorage.setItem('age', '25');
    // localStorage.setItem('phone', '12345687965');
    // localStorage.setItem('address', 'mirpur');

  }

  onSubmit(){
      //JSON.parse make to  object 
    let users: User[]= JSON.parse(localStorage.getItem('users') || '[]');

    if(this.isUpdate){
      users = users.map(use => (use.phone == this.user.phone ? this.user : use));
    }else {
      users.push(this.user);
    }

      //JSON.stringify make to string
    localStorage.setItem('users', JSON.stringify(users));

    this.user = new User('', 0, '', '');
    this.router.navigate(['/listdata']);
  }
    
}

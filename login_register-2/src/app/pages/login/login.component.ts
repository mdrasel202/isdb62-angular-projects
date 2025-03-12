import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeForm : 'loging' | 'register' = 'register';

  _router = inject(Router);
  //constructor(private _router:Router){}

  registerObj: Register = new Register();
  logingObj : Loging = new Loging();

  toggleForm(fr : 'loging' | 'register'){
    this.activeForm = fr;
  }

  regisForm(){
    const localActive = localStorage.getItem('user');
    if(localActive != null){
      const localArray = JSON.parse(localActive);
      localArray.push(this.registerObj);
      localStorage.setItem('user', JSON.stringify(localArray))

    }else{
      const usrs = [];
      usrs.push(this.registerObj);
      localStorage.setItem('user', JSON.stringify(usrs))

    }
    alert('Registration Successful');
  }

  logingForm(){
    debugger;
    
    const localActive = localStorage.getItem('user');
    if(localActive != null){
      const localArray = JSON.parse(localActive);
      const usUsrExist = localArray.find((localArray:Register)=> localArray.email== this.logingObj.email && localArray.password == this.logingObj.password);
      if(usUsrExist != undefined){
        this._router.navigateByUrl('/deshbord')
      }else{
        alert('email or password incorrect');
      }
    }else{
      alert('No data found');
    }
  }
}

export class Register{
  name : string;
  email : string;
  password : string

  constructor(){
    this.name='',
    this.email='',
    this.password=''
  }
}

export class Loging{
  email : string;
  password : string

  constructor(){
    this.email='',
    this.password=''
  }
}

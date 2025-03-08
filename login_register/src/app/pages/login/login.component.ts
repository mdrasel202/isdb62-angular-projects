import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView : boolean = true;

userRegistation:any={
  userName : '',
  password : '',
  emailId : ''
}

userLoging: any = {
  useName : '',
  password : ''
}

router = inject(Router);

onRegister(){
  const islocation = localStorage.getItem("angular18Locatuib");
  if(islocation != null){
    const locationArry = JSON.parse(islocation);
    locationArry.push(this.userRegistation);
    localStorage.setItem("angular18Locatuib",JSON.stringify(locationArry))
  }else{
    const locationArry = [];
    locationArry.push(this.userRegistation);
    localStorage.setItem("angular18Locatuib",JSON.stringify(locationArry))
  }
  alert("Registration Success");
}

onLoging(){
  const islocation = localStorage.getItem("angular18Locatuib");

  if(islocation != null){
    const user = JSON.parse(islocation);

    const isUsrFonund = user.find((m:any)=> m.useName == this.userLoging.useName
                         && m.password == this.userLoging.password);
    if(isUsrFonund != undefined){
      this.router.navigateByUrl('/deshboard')
    }else{
      alert("User name or password is wrong")
    }                     
  }else{
    alert("No user found")
  }
}
}

import { Component } from '@angular/core';
import { Users } from '../modal/users';

declare var bootstrap: any;

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  user: Users[]=[];

  isEditing: boolean = false;

  newUsers: Users ={
    user_id:0,
    user_name:'',
    user_email:'',
    user_role:'',
  }

  

  openModal(user?: Users){
    if(user){
      this.newUsers = {...user};
      this.isEditing = true;
    }else{
      this.newUsers = new Users(0,'','','');
      this.isEditing = false;
    }

    const modalElement = document.getElementById('cafeModal');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    const localData = localStorage.getItem('angular19');
    if(localData != null){
      this.studentlist = JSON.parse(localData);
    }
  }
  title = 'student_registration';

  @ViewChild('myModal') model : ElementRef | undefined;

  studentObj : Student = new Student();

  studentlist : Student[] = [];

  openModel(){
    const model = document.getElementById("myModal") ;
    if(model != null){
      model.style.display = 'block';
    }
  }

  OnEdit(item : Student){
    this.studentObj = item;
    this.openModel();
  }

  closeMode(){
    this.studentObj = new Student();
    if(this.model != null){
      this.model.nativeElement.style.display = 'none';
    }
  }

  OnDelete(item : Student ){
    const isDelete = confirm("Are you sure want to delete");
   
    if (isDelete) {
      const currentRecord = this.studentlist.find(m=> m.id === this.studentObj.id);
     this.studentlist.splice(currentRecord,1) 
      localStorage.setItem('angular19', JSON.stringify(this.studentlist));
    }
    
  }

  updateModel(){
    const currentRecord = this.studentlist.find(m=> m.id === this.studentObj.id);
    if(currentRecord != undefined){
      currentRecord.name = this.studentObj.name;
      currentRecord.address = this.studentObj.address;
      currentRecord.phoneNo = this.studentObj.phoneNo;
    };
    localStorage.setItem('angular19', JSON.stringify(this.studentlist));
  }

  saveModel(){
    debugger;
    const localStor = localStorage.getItem('angular19');
    if(localStor != null){
      const localArry = JSON.parse(localStor);
      this.studentObj.id = localArry.length +1;
      localArry.push(this.studentObj);
      this.studentlist = localArry;
      localStorage.setItem('angular19', JSON.stringify(localArry));
    }else{
      const newArr = [];
      newArr.push(this.studentObj);
      this.studentObj.id = 1;
      this.studentlist = newArr;
      localStorage.setItem('angular19', JSON.stringify(newArr));
    }
  }
}

export class Student{
  id:number;
  name: string;
  phoneNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor(){
    this.id = 0;
    this.name = '';
    this.phoneNo = '';
    this.email = '';
    this.city = '',
    this.state = '',
    this.pincode = '';
    this.address = '';
  }
}

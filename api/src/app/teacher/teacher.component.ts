import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [ FormsModule, CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit{
 
 teachers : Teacher[]=[];

 isEditing: boolean = false;

 newTeacher: Teacher ={
  id: 0,
  name: '',
  schoolName: '',
  isHeadTeacher: false,
  assignedSubject: '',
  salary: 0,
  joiningDate: new Date(),
  isAggressive: false
 }

 //newTeachers: Teacher = new Teacher(0, '', '', false, '', 0, new Date(), false);

 private modal: bootstrap.Modal | null = null;

 constructor(private teacherervice: TeacherService){}

 ngOnInit(): void {
  console.log('teacher');
  this.fetchSpells();
}

// addTeacher(){
//   console.log('Adding teacher:', this.newTeacher);
//   //debugger;
//   this.teacherervice.addTeacher(this.newTeacher).subscribe(
//     (response) =>{
//       debugger;
//       this.teachers.push(response);
//       this.modal?.hide();
//       this.resetForm();
//     },
//     (error) =>{
//       console.error('Errot adding teacher:', error);
//     }
//   );
// }

resetForm(){
  this.newTeacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
  this.newTeacher={
     id: 0,
     name: '',
     schoolName: '',
     isHeadTeacher: false,
     assignedSubject: '',
     salary: 0,
     joiningDate: new Date(),
     isAggressive: false
  }
}

// openModal(){
//   const modalElement = document.getElementById('teacherModal');
//   if(modalElement){
//     this.modal = new bootstrap.Modal(modalElement);
//     this.modal.show();
//   }
// }

getSpells(){
  this.teacherervice.getSpells().subscribe(teachers => this.teachers = teachers);
}

fetchSpells(){
  this.teacherervice.getSpells().subscribe(
    (data) =>{
      this.teachers = data;
    console.log('Fetched teachers :' , this.teachers);
    }
  )
}

deleteTeacher(id:number){
  this.teacherervice.deleteTeacher(id).subscribe(
    () => {
      this.teachers = this.teachers.filter(t => t.id !== id);
    },
    (error) => {
      console.error('Error deleting teacher : ', error);
    }
  )
}


openModal(teacher?: Teacher){
  if(teacher){
    this.newTeacher = {...teacher};
    this.isEditing = true;
  }else{
    this.newTeacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
    this.isEditing = false;
  }

  const modalElement = document.getElementById('teacherModal');
  if(modalElement){
    this.modal = new bootstrap.Modal(modalElement);
    this.modal.show();
  }
}

saveTeacher(){
  if(this.newTeacher){
    if(this.isEditing){
      console.log('Updating teacher:', this.newTeacher);
      this.teacherervice.updateTeacher(this.newTeacher).subscribe(
        (reponse) => {
          const index = this.teachers.findIndex(t => t.id === reponse.id);
          if(index !== -1){
            this.teachers[index] = reponse;
          }
          this.modal?.hide();
        },
        (error) => {
          console.error('error updatinf teacher : ', error);
        }
      );
    }else{
      console.log('Adding teacher:', this.newTeacher);
  //debugger;
  this.teacherervice.addTeacher(this.newTeacher).subscribe(
    (response) =>{
      debugger;
      this.teachers.push(response);
      this.modal?.hide();
      this.resetForm();
    },
    (error) =>{
      console.error('Errot adding teacher:', error);
    }
  );
    }
  }
}


}

export class Teacher{
  id:number;
  name:string;
  schoolName:string;
  isHeadTeacher:boolean;
  assignedSubject:string;
  salary:number;
  joiningDate:Date;
  isAggressive: boolean;

  constructor(
    id: number,
    name: string,
    schoolName: string,
    isHeadTeacher: boolean,
    assignedSubject: string,
    salary: number,
    joiningDate: Date,
    isAggressive: boolean
  ) {
    this.id = id;
    this.name = name;
    this.schoolName = schoolName;
    this.isHeadTeacher = isHeadTeacher;
    this.assignedSubject = assignedSubject;
    this.salary = salary;
    this.joiningDate = joiningDate;
    this.isAggressive = isAggressive;
  }

  
}

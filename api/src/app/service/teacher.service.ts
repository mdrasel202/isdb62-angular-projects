import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../teacher/teacher.component';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiUrl = 'http://192.168.0.219:8080/teachers';
  
    constructor(private http:HttpClient) { }
  
    getSpells(): Observable<any>{
      return this.http.get<any[]>(this.apiUrl);
    }

    addTeacher(teacher: Teacher): Observable<Teacher>{
      return this.http.post<Teacher>(this.apiUrl, teacher);
    }

    updateTeacher(teacher: Teacher): Observable<Teacher>{
      return this.http.put<Teacher>(`${this.apiUrl}/${teacher.id}`, teacher);
    }

    deleteTeacher(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

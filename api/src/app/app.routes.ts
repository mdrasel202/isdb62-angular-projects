import { Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';

export const routes: Routes = [
    {path: 'teacher', component:TeacherComponent},
    {path: 'harry-potter', component:HarryPotterComponent}
];

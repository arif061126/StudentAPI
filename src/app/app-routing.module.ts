import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path: "showStudents",
    component: StudentComponent,
    pathMatch:"full"
  },
  {
    path: "",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path: "addStudent",
    component:AddstudentComponent,
    pathMatch:"full"
  },
  {
    path: "update-student/:id",
    component:UpdateStudentComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

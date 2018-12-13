import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';  // Reactive Form Module

// Include components for in which router service to be used
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { DepComponent } from "./dep/dep.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LecComponent } from './lec/lec.component';
import { StudentsListComponent } from './students-list/students-list.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "dep", component: DepComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: 'lec', component: LecComponent },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentsListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
];
// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule   // Reactive forms module
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
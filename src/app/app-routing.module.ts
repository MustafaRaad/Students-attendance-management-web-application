import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // Reactive Form Module

// Include components for in which router service to be used
import { HomeComponent } from "./home/home.component";
import { attendanceComponent } from "./attendance/attendance.component";
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { StudentsListComponent } from './admin/students-list/students-list.component';
import { AddLecturerComponent } from "./admin/add-lecturer/add-lecturer.component";
import { EditLecturerComponent } from './admin/edit-lecturer/edit-lecturer.component';
import { LecturersListComponent } from './admin/lecturers-list/lecturers-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AbsenceComponent } from './absence/absence.component';
import { EditAbsenceComponent } from './edit-absence/edit-absence.component';

// Import canActivate guard services
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "attendances", component: attendanceComponent },
  { path: "admin", component: AdminComponent },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentsListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'register-lecturer', component: AddLecturerComponent },
  { path: 'view-lecturers', component: LecturersListComponent },
  { path: 'edit-lecturer/:id', component: EditLecturerComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'absences', component: AbsenceComponent, canActivate: [AuthGuard]},
  { path: 'edit-absence/:id', component: EditAbsenceComponent, canActivate: [AuthGuard]}

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

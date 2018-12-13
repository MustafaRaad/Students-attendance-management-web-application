import { RouterModule, Router, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// ------------------------firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Reactive Form Module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// -----------------components
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepComponent,
    LoginComponent,
    AdminComponent,
    AddStudentComponent,
    EditStudentComponent,
    LecComponent,
    StudentsListComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "Attendance"), /*imports firebase/app needed for everything*/
    AngularFireDatabaseModule,  // Firebase database module
    AngularFirestoreModule, /*imports firebase/firestore, only needed for database features*/
    AngularFireAuthModule, /*imports firebase/auth, only needed for auth features*/
    AngularFireStorageModule, /*imports firebase/storage only needed for storage features*/
    BrowserAnimationsModule,    // Required animations module for Toastr

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

    ReactiveFormsModule,
    NgxPaginationModule,  // NGX pagination module
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

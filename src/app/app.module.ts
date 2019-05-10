import { RouterModule, Router, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// ------------------------firebase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import firebase from '@firebase/app';
import { FirebaseApp as _FirebaseApp, FirebaseOptions, FirebaseAppConfig } from '@firebase/app-types';
import { FirebaseAuth } from '@firebase/auth-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseMessaging } from '@firebase/messaging-types';
import { FirebaseStorage } from '@firebase/storage-types';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { FirebaseOptionsToken, FirebaseNameOrConfigToken, AngularFireModule } from '@angular/fire';

// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';


// Reactive Form Module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "./shared/services/auth.service";


// -----------------components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { attendanceComponent } from "./attendance/attendance.component";
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { StudentsListComponent } from './admin/students-list/students-list.component';
import { AddLecturerComponent } from "./admin/add-lecturer/add-lecturer.component";
import { EditLecturerComponent } from './admin/edit-lecturer/edit-lecturer.component';
import { LecturersListComponent } from './admin/lecturers-list/lecturers-list.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AbsenceComponent } from './absence/absence.component';

// ---------------

export class FirebaseApp implements _FirebaseApp {
  name: string;
  automaticDataCollectionEnabled: boolean;
  options: {};
  auth: () => FirebaseAuth;
  database: (databaseURL?: string) => FirebaseDatabase;
  messaging: () => FirebaseMessaging;
  storage: (storageBucket?: string) => FirebaseStorage;
  delete: () => Promise<void>;
  firestore: () => FirebaseFirestore;
}

export function _firebaseAppFactory(options: FirebaseOptions, name?: string, appConfig?: FirebaseAppConfig): FirebaseApp {
  const config = appConfig || {};
  if (name && config.name && config.name !== name) {
      console.warn('FirebaseAppNameToken and FirebaseAppConfigToken.name don\'t match, FirebaseAppNameToken takes precedence.');
  }
  config.name = name || config.name || '[DEFAULT]';
  const existingApp = firebase.apps.filter(app => app.name === config.name)[0];
  return (existingApp || firebase.initializeApp(options, config)) as FirebaseApp;
}

// -----------
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    attendanceComponent,
    AdminComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    AddLecturerComponent,
    EditLecturerComponent,
    LecturersListComponent,
    DashboardComponent,
    SignInComponent,
    VerifyEmailComponent,
    AbsenceComponent,

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
  providers: [{ provide: FirebaseNameOrConfigToken, useValue: environment.firebase }, {provide: FirestoreSettingsToken, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../shared/services/auth.service";
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lecturers: any;
  lecturerName: string;
  lecturerEmail: string;
  lecturerEmailVerified: string;
  lecturerUid:string;
  public isLoggedIn = this.authService.isLoggedIn;
  // displayName:string;

  constructor(
    public authService: AuthService,
    private fire:AngularFireAuth ,
    private crudService: CrudService
    ) { 
      // console.log("Logged in ? "+this.authService.isLoggedIn)

      
      
    }
    
    
    ngOnInit() {
      this.crudService.read_Lecturers().subscribe(data => {
 
        this.lecturers = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            displayName: e.payload.doc.data()['displayName'] = this.lecturerName,
            email: e.payload.doc.data()['email'],
            emailVerified: e.payload.doc.data()['emailVerified'],
            uid:e.payload.doc.data()['uid'],

          };
        })
        console.log(this.lecturers);
   
      });
      
    }

  }

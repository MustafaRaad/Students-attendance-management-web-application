import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  private isLoggedIn: boolean = false;
  private email: string;


  constructor(public afAuth: AngularFireAuth,public router:Router) {
    this.user = afAuth.authState;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) { this.isLoggedIn = true; }
      else {
        this.isLoggedIn = false;
        this.router.navigate(['login'])
      }
    });
  }
  ngOnInit() { }

  logOut() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['login'])
  }
}

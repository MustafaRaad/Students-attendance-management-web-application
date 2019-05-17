import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(
        public authService: AuthService,
        public router: Router,
        public ngZone: NgZone,
        public auth: AuthService
    ) {
        // console.log('ofy'+this.afAuth.auth.currentUser);
        
    }
    ngOnInit() { }
 
  }
  
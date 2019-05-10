import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../shared/services/auth.service";
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  public isLoggedIn = this.authService.isLoggedIn;
  
  constructor(public afAuth: AngularFireAuth, 
    public router:Router, 
    public authService: AuthService,
    public ngZone: NgZone
    ) { 
      // console.log("Logged in ? "+this.authService.isLoggedIn)

      
      
    }
    
    
    ngOnInit() {
      
      
    }
    
  
    
  }

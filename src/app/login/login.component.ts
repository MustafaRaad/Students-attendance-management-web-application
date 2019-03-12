import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string='admin56754@gmail.com';
  private password: string='admin56754';

  constructor(
    private fire: AngularFireAuth, 
    public router: Router, 
    public toastr: ToastrService,

    ) { };

  ngOnInit() {
  }
  signin(){
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      console.log(this.email, this.password)
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email',this.fire.auth.currentUser.email )

      this.fire.authState.subscribe(auth=>{
        if(auth){
  localStorage.setItem('uid',auth.uid )
  
        }
      })



      this.router.navigate(['home'])
    }).catch(error=>{
      console.error(error)
    })
  }
}
// this.toast.show("Login was successful");

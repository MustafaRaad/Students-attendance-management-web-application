import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string='ofydesigner.2008@gmail.com';
  private password: string='M07705675477';

  constructor(private fire: AngularFireAuth, public router: Router, public toastr: ToastrService) { };

  ngOnInit() {
  }

  login() {
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
      // this.toastr.show(this.email + 'successfully added!');
      console.log(this.email);

      this.router.navigate(['home']);
    }).catch(error => { console.error(error) })
  }

}
// this.toast.show("Login was successful");

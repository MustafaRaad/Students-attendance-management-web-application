import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-lecturer',
  templateUrl: './add-lecturer.component.html',
  styleUrls: ['./add-lecturer.component.css']
})
export class AddLecturerComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private fire: AngularFireAuth, private router: Router, public toastr: ToastrService) { }

  ngOnInit() {
  }

  signUp() {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
      this.toastr.show(this.email + 'successfully added!');
      this.router.navigate(['home']);
    }).catch(error => { console.error(error) })
  }
}

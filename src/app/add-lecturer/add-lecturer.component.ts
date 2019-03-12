import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-add-lecturer',
  templateUrl: './add-lecturer.component.html',
  styleUrls: ['./add-lecturer.component.css']
})
export class AddLecturerComponent implements OnInit {
  email:string = '';
  password:string = '';
  itemList: AngularFireList<any>

  constructor(public db:AngularFireDatabase ,private fire:AngularFireAuth , private router: Router) { 
    this.itemList = db.list('users')
  }

  ngOnInit() {
  }

  myRegister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      console.log(this.email, this.password)
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email',this.fire.auth.currentUser.email )

      this.fire.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('uid',auth.uid )
  this.itemList.push({
    email: this.email ,
    uid : auth.uid
  })
  
        }
      })

      this.router.navigate(['home'])
    }).catch(error=>{
      console.error(error)
    })
  }
}
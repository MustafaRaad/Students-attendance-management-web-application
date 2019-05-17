import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
// import custom validator to validate that password and confirm password fields match
import { valid } from '../../shared/valid.validator';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-lecturer',
  templateUrl: './add-lecturer.component.html',
  styleUrls: ['./add-lecturer.component.css']
})
export class AddLecturerComponent implements OnInit {
  displayName:string;
  email:string;
  password:string;
  department:string;
  itemList: AngularFireList<any>
  registerForm: FormGroup;
  submitted = false;

  constructor(public db:AngularFireDatabase ,
    public authService: AuthService,
     private fire:AngularFireAuth ,
     private router: Router,
     private fb: FormBuilder,
     private afs: AngularFirestore,
     )
     { 
       this.itemList = db.list('users') 
     }

  ngOnInit() {
    
    this.registerForm = this.fb.group({
      displayName: [''],
      department:[''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
    {validator: valid('password', 'confirmPassword')}
    );
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      console.log(this.email,this.displayName, this.password)
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email',this.fire.auth.currentUser.email )

      this.fire.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('uid',auth.uid )
  this.itemList.push({
    displayName: this.displayName ,
    department:this.department,
    email: this.email ,
    password: this.password ,
    uid : auth.uid,
  })
  
        }
      })

      this.router.navigate(['admin'])
    }).catch(error=>{
      console.error(error)
    })
  }
}
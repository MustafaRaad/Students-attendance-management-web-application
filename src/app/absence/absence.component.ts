import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  p: number = 1;                      // Fix for AOT compilation error for NGX pagination
  Student: Student[];                 // Save students data in Student's array.
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  editForm: FormGroup;  // Define FormGroup to student's edit form


  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }


  ngOnInit() {
    this.updateStudentData();   // Call updateStudentData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetStudent(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    });
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetStudentsList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Student = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Student.push(a as Student);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }



  get stage() {
    return this.editForm.get('stage');
  }
  get lect1() {
    return this.editForm.get('lect1');
  }

  get lect2() {
    return this.editForm.get('lect2');
  }

  get lect3() {
    return this.editForm.get('lect3');
  }
  get lect4() {
    return this.editForm.get('lect4');
  }
  get lect5() {
    return this.editForm.get('lect5');
  }
  get lect6() {
    return this.editForm.get('lect6');
  }
  get lect7() {
    return this.editForm.get('lect7');
  }

  // Contains Reactive Form logic
  updateStudentData() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      department: [''],
      stage: ['', [Validators.required, Validators.pattern('^[0-9]')]],
      lect1: [''],
      lect2: [''],
      lect3: [''],
      lect4: [''],
      lect5: [''],
      lect6: [''],
      lect7: [''],
    })
  }

  // Below methods fire when somebody click on submit button
  updateForm() {
    this.crudApi.UpdateStudent(this.editForm.value);       // Update student data using CRUD API
    this.toastr.success(this.editForm.controls['firstName'].value + ' updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['/']);               // Navigate to student's list page when student data is updated
  }


}
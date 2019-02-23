import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
@Component({
  selector: 'app-add-lecturer',
  templateUrl: './add-lecturer.component.html',
  styleUrls: ['./add-lecturer.component.css']
})
export class AddLecturerComponent implements OnInit {
  public lecturerForm: FormGroup;  // Define FormGroup to lecturer's form

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }


  ngOnInit() {
    this.crudApi.GetLecturersList();  // Call GetLecturersList() before main form is being called
    this.lectureForm();              // Call lecturer form when component is ready
  }

  // Reactive lecturer form
  lectureForm() {
    this.lecturerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      title: [''],
      department: [''],
      stage: [''],
      email: [''],
      password: ['', [Validators.required, Validators.pattern('^[0-9]')]]
    })
  }

  // Accessing form control using getters
  get title() {
    return this.lecturerForm.get('title');
  }

  get name() {
    return this.lecturerForm.get('name');
  }

  get department() {
    return this.lecturerForm.get('department');
  }

  get stage() {
    return this.lecturerForm.get('stage');
  }
  get email() {
    return this.lecturerForm.get('email');
  }
  get password() {
    return this.lecturerForm.get('password');
  }

  // Reset lecturer form's values
  ResetForm() {
    this.lecturerForm.reset();
  }

  submitLecturerData() {
    this.crudApi.AddLecturer(this.lecturerForm.value); // Submit lecturer data using CRUD API
    this.toastr.success(this.lecturerForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
  };

}

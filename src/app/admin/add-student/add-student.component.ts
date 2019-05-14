import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  public studentForm: FormGroup;  // Define FormGroup to student's form

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }


  ngOnInit() {
    this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.studenForm();              // Call student form when component is ready
  }

  // Reactive student form

  studenForm() {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      department: [''],
      stage: ['', [Validators.required, Validators.pattern('^[1-6]')]],
      lect1: ['0'],
      lect2: ['0'],
      lect3: ['0'],
      lect4: ['0'],
      lect5: ['0'],
      lect6: ['0'],
      lect7: ['0'],
    })
  }

  // Accessing form control using getters
  get firstName() {
    return this.studentForm.get('firstName');
  }

  get lastName() {
    return this.studentForm.get('lastName');
  }

  get department() {
    return this.studentForm.get('department');
  }

  get stage() {
    return this.studentForm.get('stage');
  }
  get lect1() {
    return this.studentForm.get('lect1');
  }

  get lect2() {
    return this.studentForm.get('lect2');
  }

  get lect3() {
    return this.studentForm.get('lect3');
  }
  get lect4() {
    return this.studentForm.get('lect4');
  }
  get lect5() {
    return this.studentForm.get('lect5');
  }
  get lect6() {
    return this.studentForm.get('lect6');
  }
  get lect7() {
    return this.studentForm.get('lect7');
  }

  // Reset student form's values
  ResetForm() {
    this.studentForm.reset();
  }
  
  submitStudentData() {
    this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
  };

}

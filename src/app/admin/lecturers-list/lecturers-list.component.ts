import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-lecturers-list',
  templateUrl: './lecturers-list.component.html',
  styleUrls: ['./lecturers-list.component.css']
})
export class LecturersListComponent implements OnInit {

  title = 'View Lecturers information';
 
  lecturers: any;
  lecturerName: string;
  lecturerEmail: string;
  lecturerEmailVerified: string;
  lecturerUid:string;
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit() {
    this.crudService.read_Lecturers().subscribe(data => {
 
      this.lecturers = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          displayName: e.payload.doc.data()['displayName'],
          email: e.payload.doc.data()['email'],
          emailVerified: e.payload.doc.data()['emailVerified'],
          uid:e.payload.doc.data()['uid']
        };
      })
      // console.log(this.lecturers);
 
    });
  }
 
  // CreateRecord() {
  //   let record = {};
  //   record['displayName'] = this.lecturerName;
  //   record['email'] = this.lecturerEmail;
  //   record['emailVerified'] = this.lecturerEmailVerified;
  //   this.crudService.create_NewLecturer(record).then(resp => {
  //     this.lecturerName = "";
  //     this.lecturerEmail = undefined;
  //     this.lecturerEmailVerified = "";
  //     console.log(resp);
  //   })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Lecturer(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.displayName;
    record.Editemail = record.email;
    record.EditAddress = record.emailVerified;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['displayName'] = recordRow.EditName;
    record['email'] = recordRow.Editemail;
    record['emailVerified'] = recordRow.EditAddress;
    this.crudService.update_Lecturer(recordRow.id, record);
    recordRow.isEdit = false;
  }
 
}
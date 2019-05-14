import { Injectable } from '@angular/core';
import { Student } from './student';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too


  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase
    ,private firestore: AngularFirestore
    ) { }

  // Create Student
  AddStudent(student: Student) {
    this.studentsRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      department: student.department,
      stage: student.stage,
      lect1:student.lect1,
      lect2:student.lect2,
      lect3:student.lect3,
      lect4:student.lect4,
      lect5:student.lect5,
      lect6:student.lect6,
      lect7:student.lect7,
    })
  }
 
  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }

  

  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }


  //******************************************** */

  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      firstName: student.firstName,
      lastName: student.lastName,
      department: student.department,
      stage: student.stage,
      lect1:student.lect1,
      lect2:student.lect2,
      lect3:student.lect3,
      lect4:student.lect4,
      lect5:student.lect5,
      lect6:student.lect6,
      lect7:student.lect7
    })
  }
  //******************************************** */
  // Delete Student Object
  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    this.studentRef.remove();
  }

  // create_NewLecturer(record) {
  //   return this.firestore.collection('users').add(record);
  // }
 
  read_Lecturers() {
    return this.firestore.collection('users').snapshotChanges();
  }
 
  update_Lecturer(recordID,record){
    this.firestore.doc('users/' + recordID).update(record);
  }
 
  delete_Lecturer(record_id) {
    this.firestore.doc('users/' + record_id).delete();
  }
  }

import { Injectable } from '@angular/core';
import { Student } from './student';  // Student data type interface class
import { Lecturer } from './lecturer';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  lecturersRef: AngularFireList<any>;    // Reference to lecturer data list, its an Observable
  lecturerRef: AngularFireObject<any>;   // Reference to lecturer object, its an Observable too


  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  AddStudent(student: Student) {
    this.studentsRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      department: student.department,
      stage: student.stage,
    })
  }
  // Create Lec
  AddLecturer(lecturer: Lecturer) {
    this.lecturersRef.push({
      title: lecturer.title,
      name: lecturer.name,
      department: lecturer.department,
      stage: lecturer.stage,
      email: lecturer.email,
      password: lecturer.password,
    })
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }

  // Fetch Single Lecrture Object
  GetLecturer(id: string) {
    this.lecturerRef = this.db.object('lecturers-list/' + id);
    return this.lecturerRef;
  }

  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }

  // Fetch lecturers List
  GetLecturersList() {
    this.lecturersRef = this.db.list('lecturers-list');
    return this.lecturersRef;
  }
  //******************************************** */

  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      firstName: student.firstName,
      lastName: student.lastName,
      department: student.department,
      stage: student.stage
    })
  }
  //******************************************** */
  // Delete Student Object
  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    this.studentRef.remove();
  }

  // Delete Lecturer Object
  DeleteLecturer(id: string) {
    this.lecturerRef = this.db.object('lecturers-list/' + id);
    this.lecturerRef.remove();
  }

}

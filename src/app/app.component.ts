import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Absence';
  items: Observable<any[]>;
  constructor(db: AngularFirestore, private toastr: ToastrService) {
    this.items = db.collection('items').valueChanges();
  }

  showSuccess() {
    this.toastr.success('You have Got It Successfully!');
  }
}


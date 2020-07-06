import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contact } from './../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private db: AngularFireDatabase) { }

  insert(contact: Contact, key: string): void {
    this.db.list('contact').push(contact)
      .then((result: any) => {
        console.log(result.key);
    });
  }

  update(contact: Contact, key: string): void {
    this.db.list('contact').update(key, contact)
    .catch((error: any) => {
      console.log(error);
  });
  }

  getAll() {
    return this.db.list('contact')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => (
          {
            key: c.payload.key,
            ...c.payload.val()
          }
        ));
      })
    )
  }

  delete(key: string): void {
    this.db.object(`contact/${key}`).remove();
  }
}

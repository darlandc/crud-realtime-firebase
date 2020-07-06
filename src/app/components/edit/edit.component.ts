import { ContactsService } from './../../services/contacts.service';
import { Contact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  contact: Contact;

  constructor(private service: ContactsService) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  onSubmit(){
    if(this.key){

    } else {
      this.service.insert(this.contact);
    }
  }

}

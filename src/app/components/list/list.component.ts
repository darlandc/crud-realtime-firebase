import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  list: Observable<any>;

  constructor(private service: ContactsService, private dataService: DataService) { }

  ngOnInit(): void {
    this.list = this.service.getAll();
  }

}

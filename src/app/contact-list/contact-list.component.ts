import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input()
  contacts: Contact[];

  @Output()
  edit:EventEmitter<number> = new EventEmitter();

  @Output()
  delete:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editContact(id) {
    this.edit.emit(id);
  }

  deleteContact(id) {
    this.delete.emit(id);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input()
  contact: Contact;

  @Output()
  edit:EventEmitter<number> = new EventEmitter();

  @Output()
  delete:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editContact() {
    this.edit.emit(this.contact.id);
  }

  deleteContact() {
    this.delete.emit(this.contact.id);
  }

}

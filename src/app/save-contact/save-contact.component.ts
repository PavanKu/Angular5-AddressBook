import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'save-contact',
  templateUrl: './save-contact.component.html',
  styleUrls: ['./save-contact.component.css']
})
export class SaveContactComponent implements OnInit {
  @Input()
  contact: Contact;
  
  @Output()
  save:EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveContact() {
    const mode = this.contact.id ? "edit" : "new";
    this.save.emit({
      mode: mode,
      contact: this.contact
    });
    this.contact = new Contact();
  }

}

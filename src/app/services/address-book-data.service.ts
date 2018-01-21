import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable()
export class AddressBookDataService {
  private lastId: number = 0;
  private contacts = [];

  constructor() { }

  addContact(contact: Contact):AddressBookDataService {
    if(!contact.id) {
      contact.id = ++this.lastId;
    }
    this.contacts.push(contact.save());
    return this;
  }

  deleteContactById(id: number): AddressBookDataService {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    return this;
  }

  updateContactById(id: number, values: Contact): Contact {
    let contact: Contact = this.getContactById(id);
    if(!contact) {
      return null;
    }
    Object.assign(contact.save(), values);
    return contact;
  }

  getContacts(): Contact[] {
    return [].concat(this.contacts);
  }

  getContactById(id: number): Contact {
    return this.contacts.filter(contact => contact.id === id).pop();
  }

}

import { TestBed, inject } from '@angular/core/testing';

import { AddressBookDataService } from './address-book-data.service';
import { Contact } from '../models/contact';

describe('AddressBookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressBookDataService]
    });
  });

  it('should be created', inject([AddressBookDataService], (service: AddressBookDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getContacts', () => {
    it('should return empty array by default', inject([AddressBookDataService], (service: AddressBookDataService) => {
      expect(service.getContacts()).toEqual([]);
    }));

    it('should return all the contacts', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '+1 234998100',
        country: 'United States of America'
      });
      let contact2 = new Contact({
        firstName: 'Sherlok',
        lastName: 'Holmes',
        phone: '+1 200455876',
        country: 'United Kingdom'
      });

      service.addContact(contact1);
      service.addContact(contact2);

      expect(service.getContacts()).toEqual([contact1, contact2]);
    }));
  });

  describe('#addContact', () => {
    it('should add contact', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '+1 234998100',
        country: 'United States of America'
      });
      service.addContact(contact1);
      expect(service.getContacts()).toEqual([contact1]);
    }));

    it('should automatically increament the contact id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '+1 234998100',
        country: 'United States of America'
      });
      let contact2 = new Contact({
        firstName: 'Sherlok',
        lastName: 'Holmes',
        phone: '+1 200455876',
        country: 'United Kingdom'
      });

      service.addContact(contact1);
      service.addContact(contact2);

      expect(service.getContactById(1)).toEqual(contact1);
      expect(service.getContactById(2)).toEqual(contact2);
    }));
  });

  describe('#deleteContactById', () => {
    it('should delete the contact with corresponding id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '+1 234998100',
        country: 'United States of America'
      });
      
      service.addContact(contact1);
      expect(service.getContacts()).toEqual([contact1]);

      service.deleteContactById(1);
      
      expect(service.getContacts()).toEqual([]);
    }));
  });

  describe('#updateContactById', () => {
    it('should update the existing contact with provided values', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '+1 234998100',
        country: 'United States of America'
      });
      
      service.addContact(contact1);
      service.updateContactById(1, new Contact({
        firstName: 'John',
        lastName: 'Reed'
      }));

      expect(service.getContactById(1).firstName).toEqual('John');
    }));

    it('should return null in case no contact found for provided id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      expect(service.updateContactById(1, new Contact({
        firstName: 'John',
        lastName: 'Reed'
      }))).toBeNull();
    }));
  });

  describe('#getContactById', () => {
    it('should return contact with provided id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      let contact1 = new Contact({
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '+1 234998100',
        country: 'United States of America'
      });
      
      service.addContact(contact1);
      expect(service.getContactById(1)).toEqual(contact1);
    }));

    it('should return undefiend in case no contact found with provided id', inject([AddressBookDataService], (service: AddressBookDataService) => {
      expect(service.getContactById(1)).toBeUndefined();
    }));
  });
});

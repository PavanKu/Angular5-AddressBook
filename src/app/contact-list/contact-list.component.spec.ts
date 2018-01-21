import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Contact } from '../models/contact';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let testContact2: Contact;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;

    let testContact1 = new Contact({
      id: 123,
      firstName: 'Richa',
      lastName: 'Gupta',
      phone: '+91 9817852819',
      country: 'India'
    });
    testContact1.save();
    testContact2 = new Contact({
      id: 998,
      firstName: 'Pavan',
      lastName: 'Kumar',
      phone: '+91 9650336629',
      country: 'India'
    });
    testContact2.save();

    component.contacts = [testContact1, testContact2];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create all contacts', () => {
    const de:DebugElement = fixture.debugElement.query(By.css('.cards'));
    const el = de.nativeElement;
    
    expect(component.contacts.length).toEqual(2);
    expect(el.children.length).toEqual(2);
  });

  it('should pass contact id for editing the contact', () => {
    let idToEdit: number;

    component.edit.subscribe((id: number) => idToEdit = id);

    component.editContact(testContact2.id);

    expect(idToEdit).toEqual(testContact2.id);
  });

  it('should pass contact id for deleting the contact', () => {
    let idToDelete: number;
    
    component.delete.subscribe((id: number) => idToDelete = id);

    component.deleteContact(testContact2.id)

    expect(idToDelete).toEqual(testContact2.id);
  });
});

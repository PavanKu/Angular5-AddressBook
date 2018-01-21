import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { Contact } from '../models/contact';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let testContact: Contact;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;

    testContact = new Contact({
      id: 123,
      firstName: 'Richa',
      lastName: 'Gupta',
      phone: '+91 9817852819',
      country: 'India'
    });
    testContact.save();
    component.contact = testContact;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show full name in contact card header', () => {
    const de:DebugElement = fixture.debugElement.query(By.css('.content>.header'));
    const el = de.nativeElement;
    expect(el.textContent).toContain(testContact.fullName);
  });

  it('should show phone in contact card', () => {
    const de:DebugElement = fixture.debugElement.query(By.css('.description>.call'));
    const el = de.nativeElement;
    expect(el.textContent).toContain(testContact.phone);
  });

  it('should show country name in contact card', () => {
    const de:DebugElement = fixture.debugElement.query(By.css('.description>.marker'));
    const el = de.nativeElement;
    expect(el.textContent).toContain(testContact.country);
  });

  it('should pass contact id for editing the contact', () => {
    let idToEdit: number;
    const de:DebugElement = fixture.debugElement.query(By.css('.extra.content>.buttons>.green.button'));
    const el = de.nativeElement;

    component.edit.subscribe((id: number) => idToEdit = id);

    el.click();

    expect(idToEdit).toEqual(testContact.id);
  });

  it('should pass contact id for deleting the contact', () => {
    let idToDelete: number;
    const de:DebugElement = fixture.debugElement.query(By.css('.extra.content>.buttons>.red.button'));
    const el = de.nativeElement;

    component.delete.subscribe((id: number) => idToDelete = id);

    el.click();

    expect(idToDelete).toEqual(testContact.id);
  });
});

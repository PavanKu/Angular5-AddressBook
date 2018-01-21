import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponent } from './address-book.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AddressBookDataService } from '../services/address-book-data.service';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;
  let addressBookDataServiceStub: any;
  let addressBookDataService: any;

  beforeEach(async(() => {
    addressBookDataServiceStub = {
      getContacts: () => []
    };

    TestBed.configureTestingModule({
      declarations: [ AddressBookComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: AddressBookDataService,
        useValue: addressBookDataServiceStub
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    addressBookDataService = TestBed.get(AddressBookDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

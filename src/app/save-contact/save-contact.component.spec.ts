import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SaveContactComponent } from './save-contact.component';
import { Contact } from '../models/contact';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SaveContactComponent', () => {
  let component: SaveContactComponent;
  let fixture: ComponentFixture<SaveContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SaveContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveContactComponent);
    component = fixture.componentInstance;
    
    component.contact = new Contact();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#showSaveContactForm', () => {
    it('should show empty input field by default', () => {
      const fNameInputDe = fixture.debugElement.query(By.css('input[name=firstname]'));
      const fNameInputEl = fNameInputDe.nativeElement;

      const lNameInputDe = fixture.debugElement.query(By.css('input[name=lastname]'));
      const lNameInputEl = fNameInputDe.nativeElement;

      const phoneInputDe = fixture.debugElement.query(By.css('input[name=phone]'));
      const phoneInputEl = fNameInputDe.nativeElement;

      const countryInputDe = fixture.debugElement.query(By.css('input[name=country]'));
      const countryInputEl = fNameInputDe.nativeElement;

      expect(fNameInputEl.value).toEqual('');
      expect(lNameInputEl.value).toEqual('');
      expect(phoneInputEl.value).toEqual('');
      expect(countryInputEl.value).toEqual('');
    });

    it('should show input field with contact info', () => {

      const fNameInputDe = fixture.debugElement.query(By.css('input[name=firstname]'));
      const fNameInputEl = fNameInputDe.nativeElement;

      const lNameInputDe = fixture.debugElement.query(By.css('input[name=lastname]'));
      const lNameInputEl = lNameInputDe.nativeElement;

      const phoneInputDe = fixture.debugElement.query(By.css('input[name=phone]'));
      const phoneInputEl = phoneInputDe.nativeElement;

      const countryInputDe = fixture.debugElement.query(By.css('input[name=country]'));
      const countryInputEl = countryInputDe.nativeElement;

      let testContact = new Contact({
        firstName: 'Richa',
        lastName: 'Gupta',
        phone: '+91 9817852819',
        country: 'India'
      });

      component.contact = testContact;
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(fNameInputEl.value).toEqual(testContact.firstName);
        expect(lNameInputEl.value).toEqual(testContact.lastName);
        expect(phoneInputEl.value).toEqual(testContact.phone);
        expect(countryInputEl.value).toEqual(testContact.country);
      });
    });
  });

  describe('#saveContact', () => {
    it('should save new contact', () => {
      let mode: string;
      let contact: Contact;

      const fNameInputDe = fixture.debugElement.query(By.css('input[name=firstname]'));
      const fNameInputEl = fNameInputDe.nativeElement;
      
      const lNameInputDe = fixture.debugElement.query(By.css('input[name=lastname]'));
      const lNameInputEl = lNameInputDe.nativeElement;
      
      const phoneInputDe = fixture.debugElement.query(By.css('input[name=phone]'));
      const phoneInputEl = phoneInputDe.nativeElement;
      
      const countryInputDe = fixture.debugElement.query(By.css('input[name=country]'));
      const countryInputEl = countryInputDe.nativeElement;
      
      const deBtn:DebugElement = fixture.debugElement.query(By.css('button.primary'));
      const btnEl = deBtn.nativeElement;
      
      component.save.subscribe((event) => {
        mode = event.mode;
        contact = event.contact
      });
      
      let testContact = new Contact({
        firstName: 'Richa',
        lastName: 'Gupta',
        phone: '+91 9817852819',
        country: 'India'
      });
      
      fNameInputEl.value = testContact.firstName;
      fNameInputEl.dispatchEvent(new Event('input'));

      lNameInputEl.value = testContact.lastName;
      lNameInputEl.dispatchEvent(new Event('input'));

      phoneInputEl.value = testContact.phone;
      phoneInputEl.dispatchEvent(new Event('input'));

      countryInputEl.value = testContact.country;
      countryInputEl.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        btnEl.click();

        expect(mode).toEqual('new');
        expect(contact.firstName).toEqual(testContact.firstName);
      });

    });

    it('should save updated contact', () => {
      
      let mode: string;
      let contact: Contact;
      let testCountry: string = 'United States of America';

      const countryInputDe = fixture.debugElement.query(By.css('input[name=country]'));
      const countryInputEl = countryInputDe.nativeElement;

      const deBtn:DebugElement = fixture.debugElement.query(By.css('button.primary'));
      const btnEl = deBtn.nativeElement;

      component.save.subscribe((event) => {
        mode = event.mode;
        contact = event.contact
      })

      let testContact = new Contact({
        id: 123,
        firstName: 'Richa',
        lastName: 'Gupta',
        phone: '+91 9817852819',
        country: 'India'
      });

      component.contact = testContact;
      
      countryInputEl.value = testCountry;
      countryInputEl.dispatchEvent(new Event('input'));
      
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        btnEl.click();

        expect(mode).toEqual('edit');
        expect(contact.country).toEqual(testCountry);
      });
      
    });
  });
});

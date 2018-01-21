import { Contact } from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact()).toBeTruthy();
  });

  it('should accept values from constructor', () => {
    let contact = new Contact({
      firstName: 'John',
      lastName: 'Reed'
    });

    expect(contact.firstName).toEqual('John');
    expect(contact.lastName).toEqual('Reed');
    expect(contact.id).toBeUndefined();
    expect(contact.phone).toBeFalsy();
    expect(contact.country).toBeFalsy();
  });

  it('contact#save should update the full name', () => {
    let contact = new Contact({
      firstName: 'Tony',
      lastName: 'Stark',
      phone: '+1 230130280',
      country: 'United States of America'
    });
    expect(contact.fullName).toBeFalsy();
    contact.save();
    expect(contact.fullName).toEqual('Tony Stark');
  });
});

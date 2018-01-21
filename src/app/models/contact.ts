export class Contact {
    id: number;
    fullName: string = "";
    firstName: string = "";
    lastName: string = "";
    phone: string = "";
    country: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    save(): Contact {
        this.fullName = `${this.firstName} ${this.lastName}`;
        return this;
    }
}
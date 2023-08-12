import {Person} from '../34 Modules/Person.js'
export class Employee extends Person {
    constructor(firstName, lastName, age, designation) {
        super(firstName, lastName, age);
        this.designation = designation;
    }
    getDesignation() {
        return this.designation;
    }
}



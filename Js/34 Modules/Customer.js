import {Employee} from '../34 Modules/Employee.js'
export class Customer extends Employee {
    constructor(firstName, lastName, age, designation, location){
        super(firstName, lastName, age, designation);
        this.location = location;
    }
    getLocation() {
        return this.location;
    }
    greet () {
        let msg = `Hello ${this.firstName} ${this.lastName} 
        Your Detais are:
        "Age": ${this.age}
        "Designation": ${this.designation}
        "Location": ${this.location}`
        console.log(msg);
    }
}
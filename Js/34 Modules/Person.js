export class Person {
    constructor(firstName, lastName, age){
        this.firstName =  firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getAge() {
        return this.age;
    }
}


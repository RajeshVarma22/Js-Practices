export class MyDetails {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
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

    greet() {
        let wishes = `Hi Mr. "${this.firstName} ${this.lastName}" you're "${this.age}" years old.`
        console.log(wishes);
    }
}

let implementDetails = new MyDetails("Rajesh", "Poojari", 22);
implementDetails.greet();

console.log(implementDetails);

export class ExtraDetails extends MyDetails{
    constructor(firstName, lastName, age, village) {
        super(firstName, lastName, age);
        this.village = village;
    }
    getVillage() {
        return this.village;
    }
}

let village = new ExtraDetails("Rajesh", "Poojari",22, "Gorantla");
console.log(village);


export class WorkDetails extends ExtraDetails{
    constructor(firstName, lastName, age, village, designation) {
        super(firstName, lastName, age, village);
        this.designation = designation;
    }
    getVillage() {
        return this.designation;
    }
}

let working = new WorkDetails("Rajesh", "Poojari",22, "Gorantla", "Software Engineer");
console.log(working);

console.table(working);
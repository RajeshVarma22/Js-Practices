//This is for classess we can change the values for the properties but we cannot changethe properties these are fixed.

class Mobile {    //While writing on classes name should be Uppercase
    constructor(brand , color , price){ //Constructer is responsible for initilaize the object, this will catch and hold the properties of the classObject it needs some properties.
    this.brand = brand;
    this.color = color;
    this.price = price;
    }

    //Getters and setters are methods in class oriented are responsible for get/set the property of a class.

    getBrand(){ //This is called as  getters
        return this.brand;
    }

    setBrand(brand){ //This is called as Setters
        this.brand = brand;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price){
        this.price = price; 
    }
    //We are creating another method to call all these getters together.
    
    printSpecs() {
        let allSpecs = `BRAND : ${this.getBrand()}
                        COLOR : ${this.getColor()}
                        COLOR : ${this.getPrice()}`

        console.log(allSpecs);
    }
    
}

//Now creating the object based on the class

let mobile = new Mobile('Appleiiu','RED',20000); //By new ClassName it will call the constructer. 
mobile.printSpecs();

mobile.setBrand("RV");
mobile.setColor("Black");
mobile.setPrice(35000);
mobile.printSpecs();

console.log(mobile.getBrand());



// Another example by customizing
//Use greet () to greet like this

class Laptop {
    constructor(gen , brand , ram , storage){
        this.gen = gen;
        this.brand = brand;
        this.ram = ram; 
        this.storage = storage;
    }

    getGeneration() {
        return `The gen of this laptop is${this.gen}`;
    }

    setGeneration(gen) {
        this.gen = gen;
    }

    getBrand() {
        return this.brand;
    }

    setBrand(brand) {
        this.brand = brand;
    }

    getRam() {
        return this.ram;
    }

    setRam(ram) {
        this.ram = ram;
    }

    getStorage() {
        return this.storage;
    }
    
    setStorage(storage) {
        this.storage = storage;
    }

    greet(){
        console.log(`Welcome this is an ${this.brand} Laptop`)
    }
}

console.log(greet())//See in insta
let lapSpecs = new Laptop("i5");
console.log(lapSpecs);


lapSpecs.setBrand("LENOVO");
console.log(lapSpecs);

let lapSpecs1 = new Laptop("i5", "Lenovo", "8gb", "512gb SSD");
console.log(lapSpecs1);


console.log(`Storage of "${lapSpecs1.getBrand()}" is "${lapSpecs1.getStorage()}"`);

lapSpecs1.setBrand("Hp");
console.log(`Storage of "${lapSpecs1.getBrand()}" is "${lapSpecs1.getStorage()}"`);

let hpLapSpecs = new Laptop("i5", "Hp", "8gb", "512gb SSD");
console.log(hpLapSpecs);

let iterateHp = hpLapSpecs;
for(let i in iterateHp){
    console.log(iterateHp[i]);
}
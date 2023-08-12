let myDetails ={
    name:"John",
    age:21,
    hobbies:["travelling","listening music","reading"],
    favFood:["pizza","burger","chickennuggets"],
    place:"ATP"
};


//To get this in a table format use console.table(objName)
// console.table(myDetails);

// accessing the properties of an object
console.log(myDetails);
console.log(myDetails.name);// John
console.log(myDetails.age);
console.log(myDetails.favFood);
console.log(myDetails.hobbies); 

//accessin the properties of non-existing property
console.log(myDetails.address); //undefined

// adding a new property to an object   (mutable)
myDetails.nativeLanguage = "Telugu";
console.log(myDetails.nativeLanguage);

//accessing the properties using dot, bracket notation i.e[propertyname]
console.log(myDetails.favFood);//this will print the array and it is done by dot notation
console.log(myDetails['hobbies']);// this will print the array and it is done by bracket notation
console.log(myDetails.favFood[0]); //pizza
console.log(myDetails.favFood[1]); //burger

//for dynamic properties we have to use bracket notation
////for static properties we have to use dot notation
//now doing for dynamic properties dot notation, bracket notation 
let clg = 'place';
console.log(myDetails.clg)
console.log(myDetails[clg])//ATP  this is done by bracket notation  this dynamically accessed by bracket notation.
let bTech = 'ug';
//console.log(myDetails[ug])//undefined




//now doing for static properties dot notation, bracket notation 
//Nested object in an object
let myDetails1 ={
    name:"John",
    age:21,
    address:{
        street : "pondy",
        city : "kodaikanal",
        state : "kerala",
    },
    hobbies:["travelling","listening music","reading"],
    favPlaces:["Kodaikanal","Kerala","Mumbai","Chennai"],
};
//accessing the nested object
console.log(myDetails1.address);
//accessing the nested object properties    
console.log(myDetails1.address.state);
console.log(myDetails1.address.city);
console.log(myDetails1.address.street);

// CRUD operations on an object
//create operation
let myMoney ={};
myMoney.amount = 1000; //to add a property to an object i.e (object name.propertyname = value)
myMoney.currency = "INR";
myMoney.exchangeRate = 67;
console.log(myMoney);//this will print the object i.e {amount:1000,currency:"INR",exchangeRate:67}

//read operation
console.log(myMoney.currency);//this will print the value of the property currency

//update operation
console.log(myMoney.amount);
myMoney.amount = 1010101;//suppose here you will use Amount = 1010101; then this will update the value of the property amount by replacing the old value with the new value 
console.log(myMoney.amount);

//delete operation
delete myMoney.currency;//this will delete the property currency
console.log(myMoney);//this will print the object i.e {amount:1010101}


//Extra Properties/Functions on objects

let anObj = {
    name : "jiji",
    age : 56,
    city : "unknown",
    phNum : 86865656
}

let notToCnhgObj = {
    name : "Hinger",
    age : 32,
    village : "HOinler"
}


console.log(notToCnhgObj);

notToCnhgObj.name = "Himalya";
console.log(notToCnhgObj);

//Freeze Fun will doesn't change the values it will be fixed

Object.freeze(notToCnhgObj);
console.log(notToCnhgObj);

notToCnhgObj.name = "Something";
console.log(notToCnhgObj); //Here it is not changed the name will be same as Himalya

//To get keys of an object use Object.keys(ObjName). and returns an array
console.log(Object.keys(notToCnhgObj)); // returns an array

//To get values only of an object use Object.values(ObjName).
console.log(Object.values(notToCnhgObj));// returns an array

//To get keys & values only of an object use Object.entries(ObjName). Returns as nested array
console.log(Object.entries(notToCnhgObj));// returns an nestedarray

console.log(anObj);
//To merge two objects use Object.assign 
let newObjAfterMrg = Object.assign(anObj , notToCnhgObj);// returns an array and if two properties are same then it wll take the second value
console.log(newObjAfterMrg);


//Still in pending
console.log(Object.call(newObjAfterMrg));
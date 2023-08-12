function Details(name1, age, gender){
    this.nam = name1;
    this.age = age;
    this.gender = gender;
};


//This is a prototype
Details.prototype.getDetails=function(){
    return`${this.nam},${this.gender}`;
};

// console.log(Details);
const d1 = new Details('smo', 23, 'Male');
const d2 = new Details('mmo', 23, 'Female');
console.log(d1);
console.log(d2.getDetails());
console.log(d2);
console.log(d1.getDetails());
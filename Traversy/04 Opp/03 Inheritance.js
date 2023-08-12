function Details(name1, age, gender){
    this.nam = name1;
    this.age = age;
    this.gender = gender;
};


// This is a prototype
Details.prototype.getDetails=function(){
    return`${this.nam},${this.gender}`;
};

// New Constructor

function TotalDetails(name1 , age , gender) {
    Details.call()
}
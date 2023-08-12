/*console.log("hi to console")
console.info("This is info")
console.warn("donot enter here")
console.error("error")
console.time("Time track to print 0-51"); //It is used to track the time and the string to pass should be same for time and timeEnd consoles.
let res = "";
for(i=0; i<=50; i++){
    res += i;
}
console.log(i);

console.timeEnd("Time track to print 0-51")


let student ={
    name1 : 'Rv',
    age : 22,
    gender : 'male'
};
console.table(student);

let a = 10;
console.log(a);

let b = a + 10;
console.log(b);

let sum = a + b;
console.log("The total sum of two values are " + sum)

console.log(`The sum of ${a} and ${b} is ${sum}`)

let exam = null;
console.log(`the value of exam is "${exam}" and the type of exam is "${typeof(exam)}".`)

let marks = 83;
let msg = ""; 
(marks <= 35) ? msg = 'you failed' : msg = 'you pass';
console.log(msg)

let str1 = ['1','2','3','4']
//let str2=str1.split("-")
console.log(str1)

let str2 = str1.join("-")
console.log(str2)

let str = str2.split("-")
console.log(str)

let str3 = ['1','2','3','4','5','6']
let str4 = str3.join('-')
console.log(str4)

let str5 = str4.split('-')
console.log(str5)

//console.log(str3.split('-'))
let str6 = ['abcd efgh','asa','ssa','jhsy']
let str8 = str6.join("_")
console.log(str8)

let str7 = str8.split("_")
console.log(str7)

let str9 = ['1','2','3','4','5']
let str10=str9.splice(3,0,"jk","raj","ki","ll","ok","ko")
console.log(str9)

//Objects

let electronicDevices = {
    listOfDevices1 : "mi",
    listOfDevices2 : "honor",
    mi : { 
        brand : "Mi",
        type : "Mobile",
        sim1 : "Jio",
        sim2 : "Airtel",
        Processor : "Snapdragon",
        yearsCompleted : 4,
    },
    honor : { 
        brand : "honor",
        type : "Mobile",
        sim1 : "Airtel",
        sim2 : "Jio",
        Processor : "Snapdragon",
        yearsCompleted : 3,
    },
};
console.log(electronicDevices);
console.log(electronicDevices.mi);
console.log(electronicDevices.honor);
console.log(electronicDevices.honor.type);
console.log(electronicDevices.honor.brand);
console.log(electronicDevices.mi.brand);
console.log(electronicDevices.mi["sim1"]);
electronicDevices.mi.price = 5000;
console.log(electronicDevices.mi);
electronicDevices.mi.price = 8000;
console.log(electronicDevices.mi);
delete electronicDevices.mi.sim1;
console.log(electronicDevices.mi);

//Arrays

let listOfMobiles = ["MI" , "Honor" , "JIO" , "Realme" , "Redmi" , "Nokia"]
console.log(listOfMobiles[2]);

//Accessing array by using for loop

let list = ""
for(let i = 0; i <= listOfMobiles.length-1; i++){
    list += `/${listOfMobiles[i]}`;
    list += `/ `
}
console.log(list);

//For in loop

list = "";
for(index in listOfMobiles){
    list += `//${listOfMobiles[index]}// `;
}
console.log(list);

//For of loop

list = "";
for(items of listOfMobiles){
    list += `||${items}|| `
}
console.log(list);

//For each loop

list = "";
listOfMobiles.forEach(function(Mobiles) {
    list += `${Mobiles} `
});
console.log(list);


//for each with arrow()
list = "";
listOfMobiles.forEach((mobilekist) => {
    list += `..${mobilekist}..`
});
console.log(list);

//Arrays of objects
let employee = [
    {
        id : 1,
        name : "Name1",
        age : 32,
        designation : "sr.manager"
    },
    {
        id : 1,
        name : "Name2",
        age : 32,
        designation : "sr.manager"
    },
    {
        id : 1,
        name : "Name3",
        age : 32,
        designation : "sr.manager"
    },
    {
        id : 1,
        name : "Name4",
        age : 32,
        designation : "sr.manager"
    },
    
];

console.log(employee);
console.log(employee[2]);
console.log(employee[2].name);

//iterate employes

result = "";
for(let employees of employee){
    console.log(employees)
}
result = "";
for(let employees of employee){
    
    result +=  `${employees.name} `;
};
console.log(result);

//functions experiment

//Isolated / Normal Function.
function wish() {
    console.log("WELCOME HERE........")
}
wish();

//Function Which Takes parameters

function details(name , age , id , role) {
    console.log(`my name is "${name}", my age is ${age}, with an id ${id}, working as ${role}`);
}
details("Rajesh Varma" , 22 , 2319763 , "Project Engineer");

//Function which Objects
function toObj(name , id , role , experience) {
    let detailsOfEmployee = {
        name : `${name}`,
        id : `${id}`,
        role : `${role}`,
        experience : `${experience}`,
        languages : {
            nativeLang : "Telugu",
            experience : "English",
            goodAt : "Hindi",
        }
    };
    detailsOfEmployee.brand = "Any Culture";
    console.log(detailsOfEmployee);
    console.log(detailsOfEmployee.languages);
};
toObj("Rajesh" , 53443 , "S/W Developer" , "25 years")
toObj("unkoown" , 53443 , "S/W Developer" , "25 years")



function objAsPara(details1) {
    console.log(details1);
}
let details12 = {
    name : "Name1",
    age : 34,
    slary : 735747,
    
};
objAsPara(details1=details12);


let myFunction = function (objec) {
    console.log(objec);
};
myFunction(objec = {name : "Gireesh" , age: 21})

let detail = {
    name : "Somnatha",
    age : 23
};
myFunction(detail);

//

let printObject = function(obj) { // obj is a parameter of function
    console.log(obj) // obj is a object of function
};
printObject(obj= {name1 : 'Rv' , age : 38}) 

let mobile = {
    brand : 'Mi',
    color : 'silver Grey',
    price : "Rs.22000",
};
let myLovelyMusic= {
    title : 'My Lovely Music',
    timing: "at mood disturbance",
    artist : "any one",
}
printObject(obj=mobile);
printObject(mobile);
printObject(myLovelyMusic)
myFunction(mobile);

//function as a parameter
let toPrintArray = function (array) {
    let result = "";
    for(let index in array){
        result += `Index =>${index} and the Value => ${array[index]} \n`;
    }
    console.log(result);
};
toPrintArray([10,20,30,40]);
let newArray = [23,43,423];
toPrintArray(newArray);


let string = "ghdf shfuufyh aiou aeeer gertdre akjzgcsuic oaefyhsb"
let array = string.split(" ")
console.log(array);
let newArray1 = [];
for(subString in array){
    var cnt = 0;
    console.log(array[subString])
    for(let i = 0; i < array[subString].length; i++){
        if(array[subString] !== "a" && array[subString] !== "e" && array[subString] !== "i" && array[subString] !== "o" && array[subString] !== "u"){
            cnt++;
        }
         console.log(cnt)
    }
    if(cnt > 3){    
        newArray1.push(subString)
    }
    
    
}
console.log(newArray1)

let firstValue = 13 , secndv =21;
const bitXor = firstValue ^ secndv;
const bitAnd = (firstValue & secndv) * 2;
let result = bitXor + bitAnd; 
console.log(result)
*/
const obj = {
    foo : 1,
    bar : {val :1}
}
const copy = {};
Object.assign(copy,obj);
obj.bar.val = 4;
obj.foo = 3;


console.log(copy)
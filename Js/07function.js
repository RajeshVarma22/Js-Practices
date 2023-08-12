//this is a function whicg takes some parameters and with a return type and it will return a value
function printNumbers() {
    let res = '';
    for(let i=0; i<=10; i++){
        res += `${i} `
    }
console.log(res);
};
printNumbers();

//function with some parameter
function printNumbers1(stratNumber,endNumber,increment) {
    let resu = '';
    for(i=stratNumber; i<=endNumber; i += increment){
        resu += `${i} `;
    }
    console.log(resu);
}
printNumbers1(stratNumber=10,endNumber=25,increment=5);
printNumbers1(stratNumber=10, endNumber=50, increment=5.5)
// various types of functions
// Isolated function(does'nt take any parameter and it does some process)
//function without return type (will takes some parametres and it don't do any process)
//function with return type (will takes some parametres and it will return some value) it has output also

// normal/ isolated function
function greed(){
    console.log('Greed is good');
}
greed();

// function expression
let sum=function(){
    console.log(10+10);
}
sum();

greed();
sum();

// function with parameters
function sum1(a,b){
    console.log(a+b);
}
sum1(40,26);

function myBio(name,age,country){
    console.log(`My name is ${name} and I am ${age} years old and I am from ${country}`);
}
myBio('Raj',20,'India');
myBio(name='Raj', age=20, country='India');
myBio(age=20, country='India', name='Raj');
myBio(country='India', name='Raj', age);
console.log (typeof(myBio));
console.log(myBio);
myBio()

// function with return type
let sum2=function(a,b){ 
    let result=3+(2*(a+b));
    return result+20;
}
let output=sum2(a=10, b=20);
console.log(output);
console.log(sum2(a=9, b=90))


//function with object as a parameter
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


//function with an array as a parameter
let printArray = function(arr) {
    let res = '';
    for(let index in arr){
        res += `index:${index} ==> "${arr[index]}", `;
    }
    console.log(res);
}
printArray(arr=['Raj','Rv','Raju','kkk']);
printArray(arr=["hi","hello","welcome"]);


//thisn is an example of function in a function
let printAnObject = function (funobj) {
    printAnArray1 = function (funArray) {
        let fun="";
        for(let ind in funArray){
            fun += `${ind}'s value is "${funArray[ind]}"     `
        }
        console.log(fun);
    }
    console.log(funobj);
};

let lapbrand = {
    hp : "pavilion",
    lenovo : "Slim",
    apple : "all in one"
}
printAnObject(lapbrand)
printAnObject(funobj={code1:"py", code2:"html", code3:"css", code4:"js", line:116})
printAnArray1(funArray=["aaa","bbb","ccc","line 117"])

//another example for the function in an function
let array1 = function (arr1) {
    array2 = function (arr2) {
        object1 = function (obj1) {
            object2 = function (obj2){
                console.warn(obj2);
            };
            console.log(obj1);
        };
        console.log(arr2);
    };
    console.log(arr1);
};
arr1=['1', '2','3',4,5,"'''''6'''''",7]
array1(arr1)
let arr1res = "";
for(arr1result in arr1){
    arr1res += `\n  /this is index of the function with having parameter as (arr1) ${arr1result}, this is parameter for the function${arr1}/ \n\n`
}
console.log(arr1res);

array2(arr2=[" one","two",3,4,"five", " 143 line lo eee array2 yokka parameter ki input values ichha"])
object1(obj1={KFC1:"one",KFC2:2,KFC3:"three",line:149})
object2(obj2={four:"4",five:5,six:"6",line:150})

let arr2res = "";
for (arr2result in arr2){
    arr2res = `\n /this is the  index of the function with having parameter as (arr2) ${arr2result}, this is parameter for the function  ${arr2}/ \n \n here it was given console.error(arr2res) so that it  was showing like errror`
}
console.error(arr2res)


let objinobj = function (objinobjparam) {
    obj2infun = function (obj2param) {
        obj2res = "";
        for (let num in obj2param){
            res = `${num}`
        }
        a1 = [a,aa,aaa,aaaa];
        for (thiss in a1){
            
        }
        console.log(obj2param);
    }
    console.log(objinobjparam);
}

let details = {
    firstdetail : 1,
    seconddetail : 2,
}
objinobj(details)
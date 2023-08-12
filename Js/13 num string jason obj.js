console.error("Number")
//Number

//MAX NUMBER
console.error("MAX NUMBER");
console.log(Number.MAX_SAFE_INTEGER);

//MIN NUMBER
console.warn("MIN NUMBER");
console.log(Number.MIN_SAFE_INTEGER)

//POS INFINITY
console.error("POSITIVE INFINITY");
console.log(Number.POSITIVE_INFINITY);

//NEG INFINITY
console.error("NEG INFINITY");
console.log(Number.NEGATIVE_INFINITY);

//Parse Int
console.error("PARSE INT :- It doesn't show the float value")
let str = "100"
console.log(typeof str) // Str
let num1 = Number.parseInt(str);
console.log(typeof num1);// number/Integer
console.log(`string= ${str} and number = ${num1}`);
console.log(`${typeof str} is converted to ${typeof num1}`); 


//Parse float
console.error("PARSE FLOAT :- It show the float value")
let str1 = "100.09878"
console.log(typeof str1);//string
let num2 = Number.parseFloat(str1);
console.log(typeof num2);//number
console.log(`string= ${str1} and number = ${num2}`);//Float value
console.log(`${typeof str1} is converted to ${typeof num2} in the form of float value`); 

//NUM TO STRING
console.error("NUM TO STRING");
let num3 = 123;
console.log(typeof num3);
let str3 = num3.toString();
console.log(typeof str3);
console.log(`string= ${num3} and number = ${str3}`);
console.log(`${typeof num3} is converted to ${typeof str3}`); 

//toFixed 
console.error("toFixed Point ex:-53 ==> 53.00 ==> vnaame.toFixed(1/2/3....)")
let amount = 53.245134;
console.log(amount);
console.log(amount.toFixed(2));//53.25
console.log(typeof(amount.toFixed(2)));//str
console.log(`the amount that is ${amount} is converted to ${amount.toFixed(2)}`);

//string related operations
console.error("string related operations")
let msg = ("Good Morning to everyone");
console.log(msg)

//length
console.warn("length==>vname.length");
console.log(`the length of the msg is ${msg.length}`);

//to convert to lower case and upper case
console.warn("to convert to lower case==>vname.toLowerCase similarly upper  case");
console.log(`${msg} is converted to lower case i.e ${msg.toLowerCase()}`);
console.log(`${msg} is converted to upper case i.e ${msg.toUpperCase()}`);

//subsring
console.warn("substring ==> vanme.(start index,length(means ending index))");
console.log(msg.substring(0,4));
console.log(msg.substring(10,2));
console.log(msg.substring(13));

//charAt
console.error("charAt ==> vanme.(index)");
console.log(msg.charAt(10));

//charCodeAt its the ASCCII code 
console.error("charCodeAt ==> vanme.(index)");
console.log(msg.charCodeAt(10));

//jason obj
/*
string ==> Object==parse()
object ==> string : stringify() */
console.error("jason obj")
console.warn("string ==> Object==parse()");
let json = {
    name : "vname",
    age : "vage",
    city : "vcity"
};
console.log(json);

let newArray = [];
for(let i in json){
    newArray.push(i);
};
console.log(newArray);
//object to string
console.warn("object ==> string : stringify()");
let json1 = JSON.stringify(json);
console.log(json1);// converts to string writen in double quotes i.e in json format

//string to object
console.warn("string ==> Object==parse()");
let json2 = JSON.parse(json1);
console.log(json2);// converts to object
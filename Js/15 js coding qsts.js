console.log('Hi');
/*
str1 = "Hello";
let smtg = (str) =>{
    let index = "";
    for (let i=0; i<str.length+1; i++);{
        index +=`${str.substr(0,i)}\n`;
    } 
    return index;
};
console.log(smtg(str1))
*/
/*
R
RA
RAJ
RAJE
RAJES
RAJESH
RAJESH 
RAJESH V
RAJESH VA
RAJESH VAR
RAJESH VARM
RAJESH VARMA
 */
msg = "RAJESH VARMA";
let triangleOne = (str) =>{
    let tmpStr = "";
    for(let i=0; i<str.length+1; i++){
        tmpStr += `${str.substr(0,i)}\n`
    }
    return tmpStr;
};
console.log(triangleOne(msg))

/*
RAJESH VARMA
 AJESH VARMA
  JESH VARMA
   ESH VARMA
    SH VARMA
     H VARMA
       VARMA
       VARMA
        ARMA
         RMA
          MA
           A
            
*/
let addSpace = (number) =>{
    let tempSpace = "";
    for (let j=0; j<number; j++){
        tempSpace += " ";
    }
    return tempSpace;
}
msg = "RAJESH VARMA";
let triangleTwo = (str) =>{
    let tmpStr = "";
    for(let i=0; i<=str.length; i++){
        tmpStr += `${addSpace(i)}${str.substr(i)}\n`
    }
    return tmpStr;
};
console.log(triangleTwo(msg))  


/*
RAJESH VARMA
AJESH VARMA
JESH VARMA
ESH VARMA
SH VARMA
H VARMA
 VARMA
VARMA
ARMA
RMA
MA
A
*/
let triangleThree = (str)=>{
    let tempStr = "";
    for (i=0; i<str.length; i++){
        tempStr += `${str.substr(i,str.length)}\n`
    }
    return tempStr;
}
console.log(triangleThree(msg))


/*
           A
          MA
         RMA
        ARMA
       VARMA
       VARMA
     H VARMA
    SH VARMA
   ESH VARMA
  JESH VARMA
 AJESH VARMA
RAJESH VARMA
*/
let triangleFour = (str) =>{
    let tempStr = "";
    
    for (i=str.length; i>=0; i--){
        
        tempStr += `${addSpace(i)}${str.substr(i)}\n`
    }
    return tempStr
}
console.log(triangleFour(msg))



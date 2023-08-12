//Destructing


let  student  = {
    name : "chilam",
    age : 23,
    couorse : "CSE",
    address : {
        street : "Chintapalli strra",
        village : "komikuda",
        city : "ANANTAPUR"
    },
    softSkills : {
        communication : "Good",
        behaviour : "Good",
        languagesKnown : {
            id : 1,
            langName : "Telugu",
            proficiency : "Good",
            others : {
                read : "yes",
                write : "yes",
                speak : "yes"
            },
            id : 2,
            langName : "English",
            proficiency : "Good",
            others : {
                read : "yes",
                write : "yes",
                speak : "yes"
            },
            id : 3,
            langName : "Hindhi",
            proficiency : "Good",
            others : {
                read : "yes",
                write : "yes",
                speak : "yes"
            }
        }
    },
    hardSkills : {
        id : "hardSkills",
        playingGames : ["VolleyBall", "Cricket", "Potball", "Tabletennis"],
        work : ["Angadi", "PindiMachine", "Software", "IrritatingOthers"]
    }
}

console.table(student);
console.log("hi");
// Accessing directly witout writing every time.
let {name, age } = student;
console.log(`Name: ${name}, Age : ${age}`);

//Accessing deeply

let {softSkills, hardSkills} = student;
console.log(softSkills);
console.log(hardSkills);

let {communication, behaviour, languagesKnown} = student.softSkills;
console.log(`Communication : ${communication}, Behaviour : ${behaviour} LangKnown : ${languagesKnown}`)



//Here Spread operator

let array = [12,121,13,131,14,141,1213,1312,1123,2131];
let array2 = [32,"Blue","Black",6,64,68,9,80,43,6454,343,34,55]

//Normal way to print an array.
console.log(array);

console.log(...array); //This is called as spread operator.


//To find the minimum number in an array

let minimum = Math.min(...array);
console.log(`The minimum in an array is : ${minimum}`);

//To merge two arrays by using Spread operator to an array

afterMerging = [...array , ...array2]
console.log(typeof(afterMerging))
console.log(`After merging two arrays is : ${afterMerging}`)

//Normal way to access an arraay or to print the elements of an array
let res = "";
for(i in array){
    res += `${array[i]} `;
};
console.log(res);


//By using spread operator
res = "";
mergedARRAY = []
for (i of array2){
    mergedARRAY.push(array2[i]); 
}
console.log(mergedARRAY);


  

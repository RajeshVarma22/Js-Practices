/*
let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;
timerRunning = false;
 
//satrt Timer Increasing
let startTimer = () => {
    count++;
    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100)-(minutes*60));
    milliseconds = Math.floor(count-(seconds*100)-(minutes*6000))
    document.querySelector('#minutes').innerHTML = leadingZero(minutes);
    document.querySelector('#seconds').innerHTML = leadingZero(seconds);
    document.querySelector('#milliSeconds').innerHTML = leadingZero(milliseconds);
};

//click on start button
let startButton = document.querySelector('#startBtn');
startButton.addEventListener('click', function(){
    if(!timerRunning){
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

//click on stop button
let stopButton = document.querySelector('#stopBtn');
stopButton.addEventListener('click', function(){
    clearInterval(interval);
});

//click on reset button



//To add zero before showing the single digit time
let leadingZero = (time) => {
    if(time <= 9){
        return "0" +time;
    }
    else{
        return time;
    }
};


let array1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let m = 5;
for(let k=0; k<=array1.length; k++){
    if(k === 0){
        k++;
    }
    if(k%m === 0){
        array1.splice(k,m)
    }
    if(k%m === 0){
        k += m-1;
    }
};
console.log(array1);

let aa=0;
for(let l=0; l<array1.length; l++ ){
    aa += array1[l];
}
console.log(aa);

let array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
let mk = 5;
for(let list=1; list<=array2.length; list++){
    if(list%mk === 0){
        array2.splice(list,mk)
    }
};
console.log(array2);

let ans=0;
for(let ll=0; ll<array2.length; ll++){
    ans += array2[ll];
}
console.log(ans);


//Experiment on setItem and getItem in Local Storage

let myCollegeFrnds = {
    friend1 : {
        id : 583,
        fName : "Murali",
        lName : "Pobbathi",
        mName : "Krishna",
        fullName : function () {
            return `${this.fName} ${this.mName} ${this.lName}`
        },
        address : {
            street : "streetrc",
            village : "Kalluru",
            city : "Anatapur",
            district : "Anantapur"
        },
        skills : {
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
                playingGames : ["VolleyBall", "Cricket", "Potball", "Tabletennis"],
                work : ["Gorlu", "Barigodlu", "Software", "IrritatingOthers"]
            }
        } 
    },
    friend2 : {
        id : 560,
        fName : "Sathya",
        lName : "Ediga",
        mName : "",
        fullName : function () {
            return `${this.fName} ${this.mName} ${this.lName}`
        },
        address : {
            street : "streetrc",
            village : "Appullepalli",
            city : "Kalyana Durgam",
            district : "Anantapur"
        },
        skills : {
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
                playingGames : ["VolleyBall", "Cricket", "Potball", "Tabletennis"],
                work : ["UnkwonWorks", "Software", "IrritatingOthers"]
            }
        } 
    },
    friend3 : {
        id : 560,
        fName : "Kiran",
        lName : "Bommi Reddy",
        mName : "Kumar Reddy",
        fullName : function () {
            return `${this.fName} ${this.mName} ${this.lName}`
        },
        address : {
            street : "streetrc",
            village : "Peddavaduguru",
            city : "Peddavaduguru",
            district : "Anantapur"
        },
        skills : {
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
                playingGames : ["VolleyBall", "Cricket", "Potball", "Tabletennis"],
                work : ["Angadi", "PindiMachine", "Software", "IrritatingOthers"]
            }
        } 
    },
    friend4 : {
        id : 489,
        fName : "Vamsi",
        lName : "Vadde Pallepu",
        mName : "Krishna",
        fullName : function () {
            return `${this.fName} ${this.mName} ${this.lName}`
        },
        address : {
            street : "streetrc",
            village : "Kalyanadurgam",
            city : "Kalyanadurgam",
            district : "Anantapur"
        },
        skills : {
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
                playingGames : ["VolleyBall", "Cricket", "Potball", "Tabletennis"],
                work : ["Angadi", "PindiMachine", "Software", "IrritatingOthers"]
            }
        } 
    },
}

console.log(myCollegeFrnds.friend1.fullName());
let {fullName} = myCollegeFrnds.friend1;
console.log(`${fullName}`);
console.log("hi")

let {street, city, village} = myCollegeFrnds.friend1.address;
console.log(`${street} , ${city} , ${village}`);


let {work, playingGames} = myCollegeFrnds.friend4.skills.hardSkills;
console.log(work, playingGames);

let {others, id, langName} = myCollegeFrnds.friend1.skills.softSkills.languagesKnown;
console.log(others,id, langName);

let myFrndsList = '';
let theirKeys = '';
for(let list in others){
    myFrndsList +=`${others[list]},`;
    theirKeys += ``;
}
console.log(`${Object.keys(others)} : ${myFrndsList}`)


let myFrnds = ["a1","a2","a3","a4","a5","a6","a7","a8"];
let list = '';
for(i=0; i<myFrnds.length; i++){
    list += myFrnds[i];
}
console.log(list);

let anObj = {
    friend1 : "mui",
    friend2 : "mu",
    friend3 : "m"
};


let res = '';
for(let index in anObj){
    res += anObj[index];
}
console.log(res);



let array1 = [1,21,15,12,16,68,1554,681,511,585,14444];
let array2 = [265,2678,575,4574,5581,454545];
let newArray = [];

for(index of array1){
    newArray.push(index);
}
for(things of array2){
    newArray.push(things)
}
console.log(newArray);

let anotherArray = [];
console.log(...array1)
console.log(Math.min(...array1));
for(let i=0; i<array1.length; i++){
    sim = anotherArray.slice(Math.min(...array1),1);
    
}
console.log(anotherArray);




// Javascript program to check if a number
// is Kaprekar number or not

// Returns true if n is a Kaprekar
// number, else false
function iskaprekar(n)
{
	if (n == 1)
	return true;

	// Count number of digits
	// in square
	let sq_n = n * n;
	let count_digits = 0;
	while (sq_n)
	{
		count_digits++;
		sq_n = parseInt(sq_n / 10);
	}

	let sq_n1 = n * n; // Recompute square
					// as it was changed

	// Split the square at different
	// points and see if sum of any
	// pair of splitted numbers is equal to n.
	for (let r_digits = 1;
		r_digits < count_digits;
		r_digits++)
	{
		let eq_parts = Math.pow(10, r_digits);

		// To avoid numbers like
		// 10, 100, 1000 (These are not
		// Kaprekar numbers
		if (eq_parts == n)
			continue;

		// Find sum of current parts
		// and compare with n
		let sum = parseInt((sq_n1 / eq_parts) +
					sq_n1 % eq_parts);
		if (sum == n)
		return true;
	}

	// compare with original number
	return false;
}

// Driver code
let a = []

for (let i = 1; i < 10000; i++){
	if (iskaprekar(i))
		a.push(i + '');
}
console.log(a);

for(let k=0; k<length.a; k++){
    if(a[k] === "90"){
        console.log("s")
    }
    else{
        console.log("no")
    }
}


 
function theFun(n) {
    let mm = n.toString();
    let b1 = [];
    for (i in mm) {
        b1.push(parseInt(mm[i]));
    }
    console.log(b1);
    let qq = 0;
    for (i in b1) {
        qq += b1[i];
    }
    let aa = parseInt(qq);
    return aa;
}

console.log(5050*5050);

let l = 5050;

let res1 = theFun(l);
console.log(res1);

if(l === 1){
    console.log("1");
}
else{
    let n = l*l;

    let res2 =theFun(n);
    if(res1 === res2){
        console.log(`Yes ${l} is a kaprekar`);
    }
    else{ 
        console.log(`No ${l} is not a kaprekar`);
    }
}

let arrayIn = ["1","2","3",'4',"5","+","-","6","*","7","8"];
console.log(arrayIn);
for(let index of arrayIn){
    if(index === ("+" || "-")){
        console.log("S")
    }
    else{
        console.log(index)
    }
}
*/

let a = ["1","2"];
let b = parseInt(a[0]);
let c = b+1; 
console.log(c);


// let el = document.querySelector('.btn');
// if (el === document.activeElement) {
//     console.log('Element has focus');
// } else {
//     console.log('element has no focus')
// }

let p = document.querySelector('.g');

let my = () => {
    // const element = document.activeElement.tagName;
    // p.innerHTML = element;

    let el = document.querySelector('.btn');
    if (el === document.activeElement) {
        console.log(document.activeElement.DOCUMENT_POSITION_CONTAINS)
        console.log('Element has focus');
    } else {
        console.log('element has no focus')
    }

} 

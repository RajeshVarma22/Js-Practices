for(let i=0; i<=10; i++){ // i=0, i=1, i=2, i=3, i=4, i=5, i=6, i=7, i=8, i=9, i=10
    console.log(i); // prints the numbers in the next line
}

let num = "";
for(let i=0; i<=50; i++){  
    if(i%5 === 0){
        num += `${i} `;   
    }
}
console.log(num);

let result= '';
for(let i=0; i<=10; i++){ 
    result += `${i}`; // result = "0 1 2 3 4 5 6 7 8 9 10 "
}
console.log(result);

let result1= '';
for(let i=0; i<=10; i++){
    result1 += `${i},`;// result1 = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "
}
console.log(result1);

let result2= '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        result2 += `${i}, `;// result2 = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "
    }
    else{
        result2 += `${i}`;// result2 = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 "
    }
}
console.log(result2);

let result89= '';
for(let i=0; i<=10; i++){
    result89 += `${i}\n`; // result89 = "0 \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n " here \n is the new line
}
console.log(result89);

/*
 print the numbers from 20 to 0
*/
let result3= '';
for(let i=20; i>=0; i-=2){
    result3 += `${i} \n`; // result3 = "20 \n 19 \n 18 \n 17 \n 16 \n 15 \n 14 \n 13 \n 12 \n 11 \n 10 \n 9 \n 8 \n 7 \n 6 \n 5 \n 4 \n 3 \n 2 \n 1 \n 0 \n "
}
console.log(result3);

/*
    *
    **
    ***
    ****
    *****
*/
let number= 5;
for(let i=0; i<number; i++){ // i=0, i=1, i=2, i=3, i=4
    result4= ''; // result4 = ""
    for(let j=0; j<=i; j++){    // j=0, j=1, j=2, j=3, j=4  here i=0, i=1, i=2, i=3, i=4
        result4 += '*'; // result4 = "* * * * * "  here i=0, i=1, i=2, i=3, i=4    here j=0, j=1, j=2, j=3, j=4    
    }
    console.log(result4);
}
 
/*
1
12
123
1234
12345*/

let number1= 5;
for(let i=1; i<number1; i++){ // i=0, i=1, i=2, i=3, i=4
    result5= ''; // result5 = ""
    for (let j=1; j<=i; j++){ // j=0, j=1, j=2, j=3, j=4  here i=0, i=1, i=2, i=3, i=4
        result5 +=` ${j}`; // result5 = "1 12 123 1234 12345 "  here j=0, j=1, j=2, j=3, j=4
        
    }
    console.log(result5);
}

/*
1
forloop.js:90 22
forloop.js:90 333
forloop.js:90 4444*/
let number2= 5;

for(let i=1; i<number2; i++){ // i=0, i=1, i=2, i=3, i=4  
    result6= '';  
    for (let j=1; j<=i; j++){ // j=0, j=1, j=2, j=3, j=4  here i=0, i=1, i=2, i=3, i=4
        //11 22 33 44 55
        result6 +=`${i}`    
    }
    console.log(result6);
}
//-----------------------------------//

/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 9 
1 2 3 4 5 6 7 8 9 10 
*/
let ans = '';
for (let i=1; i<=10; i++){ //i=1
    for (let j=1; j<=i; j++){//j=1,i=1 j=2,i=1 j<=i(false and comes out of the loop)
        ans += `${j} `;//1
    }
    ans += `\n`
}
console.log(ans)
//-----------------------------------//

/* 
11 
21 22 
31 32 33 
41 42 43 44 
51 52 53 54 55 
*/

let ans1='';
for (let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        ans1 += `${i}${j} `;
    }
    ans1 += `\n`
}
console.log(ans1)
//----------------------------//
/*
11 
12 22 
13 23 33 
14 24 34 44 
15 25 35 45 55 
 */
let ans2='';
for (let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        ans2 += `${j}${i} `;
    }
    ans2 += `\n`
}
console.log(ans2)

let ans3='';
for (let i=1; i<=5; i++){   
    for(let j=1; j<=i; j++){
        ans3 += `${j}${i} `;
    }   
    ans3 += `\n`
}
console.log(ans3)

let ans4='';    
for (let i=5; i>=1; i--){
    for(let j=1; j<=i; j++){
        ans4 += `${i} `;
    }
    ans4 += `\n`
}
console.log(ans4)


//i=5 i>=1 i-- j=1 j<=i j++
let rest='';
for(let k=0; k<=5; k++){
    for(let l=0; l<=k; l++){
        for(let m=0; m<=5; m++){
            console.log(k,l,m)
            rest += `${k},${l},${m}   `
        }
    }
}
console.log(rest)

let rest1='';
for(let k=0; k<=5; k++){
    for(let l=0; l<=k; l++){
        for(let m=0; m<=l; m++){
            rest1 += `${k},${l},${m} `
            console.log(rest1)
        }
    }
}
console.log(rest1)
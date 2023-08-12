/* 
1
2
3
4
5
*/
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
    }
//----------------------------------------//

/*  same result but in a single line */
let j = 1;
let result = '';
while (j <= 5){
    result += j;
    j++;
    console.log(result)
}  
console.log(result);


let jam=1;
result111 = ""
while (jam <= 5){
    result111 += jam;
    jam++;
    console.log(result111);
}     


/* 
11
12 21
13 31 32
14 41 42 43
*/
let k=5;
let result1 = '';
i=1;
while (i<=k){
    let j=1;
    while (j<=k){
        result1 += `${i}${j} `;
        j++;
    }
    result1 += '\n';
    i++;
}
console.log(result1)

// Same but using for loop

k = 5;
result1 = "";
for(i=1; i <= k; i++){
    for(j=1; j <= k; j++ ){
        result1 += `${i}${j} `
    }
    result1 += `\n`
}
console.log(result1)

//reverse of it

num = 1;
numRes = "";
i = 5;
while (i >= num){
    j = 1;
    while(j <= 5){
        numRes += `${i}${j} `
        j++;
    }
    numRes += `\n`
    i--;
}
console.log(numRes)

//same by using for loop

let nu = 5;
result = "";
for(i = 5; i >= 1; i--){
    for(j = 1; j <=nu; j++ ){
        result += `${i}${j} `
    }
    result += `\n`
}
console.log(result);

//-------------------------------------------------
let l=5;
result2='';
for(let i=1;i<=l;i++){
    for(let j=1;j<=i;j++){
        result2+= `${i}${j} `
    }
    result2+='\n';
}
console.log(result2)

//reversse of it



//-------------------------------------------------
let m=5;
result3 = '';
i=1;
while(i<=m){
    j=1;
    while(j<=i){
        result3 += `${i}${j} `
        j++;
    }
    result3 += '\n'
    i++;
}
console.log(result3)
/* 11 
12 22 
13 23 33 
14 24 34 44 
15 25 35 45 55 */
let n=5;
let result4='';
i=1;
while(i<=n){
    j=1;
    while(j<=i){
        result4 += `${j}${i} `
        j++;
    }
    result4 += '\n';
    i++;
}
console.log(result4)
//---------------------------------------
let o=5;
let result5='';
i=5;
while(i>=1){
    j=o;
    while(j>=1){
        result5 += `${j}${i} `
        j--;
    }
    result5 += '\n';
    i--;
}
console.log(result5)
//----------------------------------------
let p=5;
let result6='';
i=5;
while(i>=1){
    j=p;
    while(j>=1){
        result6 += `${i}${j} `
        j--;
    }
    result6 += '\n';
    i--;
}
console.log(result6)
//------------------------------------------------
let q=5;
let result7='';
i=5;
while(i>=1){
    j=1;
    while(j<=i){
        result7 += `${i}${j} `
        j++;
    }
    result7 += '\n';
    i--;
}
console.log(result7)


//i=5 i>=1 i-- j=1 j<=i j++



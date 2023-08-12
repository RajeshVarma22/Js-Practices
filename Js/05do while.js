/*
while syntax
-----------------------------------
initialization;
while(condition);{
    statements
    inc/dec(always should be in last line)
}
-----------------------------------
do while syntax
-----------------------------------
initialization;
do{
    statements
    inc/dec(always should be in last line)
}
while(condition);
 */
 //0-10 difference =1

let i=1;
result = ''
do{
    if(i<=9){
        result += `${i},`;
    }
    else{
        result += `${i}`;
    }
    i++;
}
while(i<=10);
console.log(result)
//--------------------------------
let j=1;
result1 = ''
while(j<=10){
    result1 += `${j} `
    j++;
}
console.log(result1)
//-------------------------------
/* 
11 12 13 14 15 
21 22 23 24 25 
31 32 33 34 35 
41 42 43 44 45 
51 52 53 54 55 */
/*let k=1;
result2 = '';
do{
    let l = 1;
    do{
        result2 += `${i}${j}`
        l++;
    }
    while(l<=i)
    result2 += '\n' 
    k++
}
while(i<=5)
console.log(result2)*/


let k=5;
let result2 = '';
i=1;
do{
    let j=1;
    do{
        result2 += `${i}${j} `;
        j++;
    }while (j<=k)
    result2 += '\n';
    i++;
}
while (i<=k)
console.log(result2)


let l=5;
let result3 = '';
i=5;
do{
    j=1;
    do{
        result3 += `${i}${j} `;
        j++
    }while(j<=l)
    result3 += '\n'
    i--;
}while(i>=1)
console.log(result3)

let m=5;
i=1;
result4 = '';
do{
    j=1;
    do{
        result4 += `${i}${j} `
        j++;
    }while(j<=i)
    result4 += '\n'
    i++;
}while(i<=m)
console.log(result4)

let n=5;
result5 = '';
i = 5;
do{
    j=1
    do{
        result5 += `${i}${j} `
        j++;
    }while(j<=i)
    result5 += '\n';
    i--;
}while(i>=1)
console.log(result5)
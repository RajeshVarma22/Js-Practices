let res='';
for(let k=0; k<=5; k++){
    for(let l=0; l<=5; l++){
        for(let m=0; m<=5; m++){
            console.log(k,l,m)
        }
    }
}

let string = "aeiou Hi murali ni vowels greater than or equal to three undevi print avuthayi"
let array = string.split(" ")
let newArray1 = [];
for(subString in array){
    console.log(subString)
    var cnt = 0;
    console.log(`cnt=${cnt}`)
    for(let i = 0; i < array[subString].length; i++){
        console.log(`${array[subString][i]}`)
        if(array[subString][i] !== "a" && array[subString][i] !== "e" && array[subString][i] !== "i" && array[subString][i] !== "o" && array[subString][i] !== "u"){
            cnt++;
        }
        console.log(`count after=${cnt}`)
    }
    if(cnt >= 3){    
        newArray1.push(array[subString])
    }
    
    
}
console.log(newArray1)
let total = newArray1.join(" ")
console.log(total)
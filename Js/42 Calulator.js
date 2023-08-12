let array = []

let display = (ans) => {
    let output = document.querySelector('#output').value;
    output = array.push(ans);
    // console.log(array);
    let numDisplay = ""
    for (let number of array){
        numDisplay += (number)
        // console.log(numDisplay,"numbrr");
    }
    document.querySelector('#output').value = numDisplay;
    checking();
}

let checking = () => {
    let arrayList = []
    let arrayList1 = []
    for(let index of array){
        if (index !=  "+" && index !=  "-" && index != "x" && index != "/"){
            arrayList.push(index)
        }    
        console.log(arrayList,"arrayList")
        if (index ===  "+" || index ===  "-" || index === "x" || index === "/"){
            arrayList.push("r");
            console.log(arrayList.length)
            if(arrayList[arrayList.length] === "r"){
                arrayList.pop(arrayList[arrayList.length]);
                arrayList1.push(index);
            }
            
        }    
    }
    console.log(arrayList,"arrayListlast")
    console.log(arrayList1,"arrayList1")
}

let delete1 = () => {
}


// let print = () => {
//     let res = "";
//     if(output1 != ""){
//         res += output1;
//     }
//     console.log(res);
// }

let n = 1;
let res1 = "";
if(n != ""){
    console.log("hi");
    res1 += n;
    console.log(res1)
} 

//number 1
let n1 = document.querySelector('#n1');
n1.addEventListener('click', ()=> {
    let n11 = document.querySelector('#n1').value;
    display(n11);
    // print();
})

//number 2
let n2 = document.querySelector('#n2');
n2.addEventListener('click', ()=> {
    let n22 = document.querySelector('#n2').value;
    display(n22);
    // print();
})

//number 3
let n3 = document.querySelector('#n3');
n3.addEventListener('click', ()=> {
    let n33 = document.querySelector('#n3').value;
    display(n33);
})

//number 4
let n4 = document.querySelector('#n4');
n4.addEventListener('click', ()=> {
    let n44 = document.querySelector('#n4').value;
    display(n44);
})

//number 5
let n5 = document.querySelector('#n5');
n5.addEventListener('click', ()=> {
    let n55 = document.querySelector('#n5').value;
    display(n55);
})

//number 6
let n6 = document.querySelector('#n6');
n6.addEventListener('click', ()=> {
    let n66 = document.querySelector('#n6').value;
    display(n66);
})

//number 7
let n7 = document.querySelector('#n7');
n7.addEventListener('click', ()=> {
    let n77 = document.querySelector('#n7').value;
    display(n77);
})

//number 8
let n8 = document.querySelector('#n8');
n8.addEventListener('click', ()=> {
    let n88 = document.querySelector('#n8').value;
    display(n88);
})

//number 9
let n9 = document.querySelector('#n9');
n9.addEventListener('click', ()=> {
    let n99 = document.querySelector('#n9').value;
    display(n99);
})

//number 0
let n0 = document.querySelector('#n0');
n0.addEventListener('click', ()=> {
    let n00 = document.querySelector('#n0').value;
    display(n00);
})

//mul 
let mul = document.querySelector('#mul');
mul.addEventListener('click', ()=> {
    let mul1 = document.querySelector('#mul').value;
    display(mul1);
})

//number minus
let minus = document.querySelector('#minus');
minus.addEventListener('click', ()=> {
    let minus1 = document.querySelector('#minus').value;
    display(minus1);
})

//number add
let add = document.querySelector('#add');
add.addEventListener('click', ()=> {
    let add1 = document.querySelector('#add').value;
    display(add1);
})

//number div
let div = document.querySelector('#div');
div.addEventListener('click', ()=> {
    let div1 = document.querySelector('#div').value;
    display(div1);
})

//number equal
let equal = document.querySelector('#equal');
equal.addEventListener('click', ()=> {
    let equal1 = document.querySelector('#equal').value;
    display(equal1);
})

//number del
let del = document.querySelector('#del');
del.addEventListener('click', ()=> {
    let del = document.querySelector('#del').value;
    console.log(del)
    display(del);
    delete1();
})






//array is an indaexed collection of elements(objects/array/string/boolean/number)
//creation of an array
let myArray = [22,21,20];   //this is an array
console.log(myArray);//this will print the array i.e [22,21,20]
//acessing the elements of an array
console.log(myArray[0]);//22
console.log(myArray[3]);//undefined
//adding an element to an array using push() method
myArray.push(19);
console.log(myArray);//this will print the array i.e [22,21,20,19]
//adding an element to an array using unshift() method (adds an element to the beginning of the array)
myArray.unshift(18);    //this will add the element to the beginning of the array
console.log(myArray);//this will print the array i.e [18,22,21,20,19]
//removing an element from an array using pop() method (removes the last element from the array)
myArray.pop(); //this will remove the last element from the array
console.log(myArray);//this will print the array i.e [18,22,21,20]
//removing an element from an array using shift() method (removes the first element from the array)
myArray.shift(); //this will remove the first element from the array
console.log(myArray);//this will print the array i.e [22,21,20]
//adding an element to an array using splice() method (adds an element to the array at a particular index)
myArray.splice(2,0,27); //this will add the element to the array at the index 2 and it will add the element 23 at that index and it will add the element after the index 2
console.log(myArray);//this will print the array i.e [22,21,27,20]
//removing an element from an array using splice() method (removes an element from the array at a particular index)
myArray.splice(2,1); //this will remove the element from the array at the index 2 and it will remove the element at that index
console.log(myArray);//this will print the array i.e [22,21,20]

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let myFavPlace = ["Kodaikanal","Kerala","Mumbai","Chennai"];
console.log(myFavPlace);
console.log(myFavPlace[1]);
console.log(myFavPlace[0]);
//Iterating over an array   (for loop)
for(let i=0;i<myFavPlace.length;i++){
    console.log(myFavPlace[i]);
}
for(let i=0;i<=myFavPlace.length-1;i++){
    console.log(myFavPlace[i]);
}
let result = '';
for(let i=0;i<myFavPlace.length;i++){
    result += `${myFavPlace[i]}   `; 
}
console.log(result);

//By using for in loop

for(let places in myFavPlace){
    console.log(myFavPlace[places]);
};

//By using for of loop

for(let placeList of myFavPlace ){
    console.log(placeList);
};

myFavPlace.forEach( listOfPlace => {
    console.log(listOfPlace);
});

let favBooks = ["My Future","How to Work Hard","Big! dreams"];
console.log(favBooks);
console.log(favBooks[0]);
favBooks.push("Listen to your soul");
console.log(favBooks[3]);
favBooks.unshift("The heart beat")
console.log(favBooks[0])
console.log(favBooks);
favBooks.pop();
console.log(favBooks);
favBooks.shift();
console.log(favBooks);
// This is normal for loop
for(let j=0; j<favBooks.length; j++){
    console.log(favBooks[j]);
}


result = "";
for(let m=0; m<favBooks.length; m++){
    result += `${favBooks[m]}`// here the last line was undefined 
}
console.log(result);
rk = result.split("");
console.log(rk);


let result21 = "";
for(i=0;i<favBooks.length;i++);{
    result21 += `${favBooks[i]} `;
}
console.log(result21);


console.log(favBooks);



let result3 = '';

for( i=0;i<favBooks.length;i++){
    result3 += `${myFavPlace[i]}   `;
    
}
console.log(result3);

// different types of for loops can be used for arrays 
//2) for-in-loop

for(let a in myFavPlace){//it is called as for in, it will give the every index value
    console.log(a);
} 


for(let a of myFavPlace){ // it is called as for of and it will give the index values and of will give the values(i.e elemets)
    console.log(a);
}


result = '';
for(let index in myFavPlace){
    result += `${myFavPlace[index]}, `
}
console.log(result)

console.log(myFavPlace)


//3)for of loop in ES6
let colors = ['Purple','skyblue','Pink','purple','Green','Red','Brown','White'];
console.log(colors);


result = '';
for(let color in colors){
    result += `${colors[color]} `;
}
console.log(result);

let smtg = ''
for(let colores in colors){
    smtg += `${colors[colores]}, `
}
console.log(smtg)

let result2 = '';
for(let color of colors){
    result2 += `${color} `;
}
console.log(result2);

//FOr each loop
result = "";
colors.forEach(listclr => {
    result += `${listclr}, `;
});
console.log(result);


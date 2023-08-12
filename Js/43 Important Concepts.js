let myFriends = [
    {
        id : 52, // After every object value keep comma ','
        name : 'Murali',
        age : 22,
        btechCompleted : true
    }, //After every object keep comma ","
    {
        id : 58,
        name : 'Kiran',
        age : 22,
        btechCompleted : true
    },
    {
        id : 54,
        name : 'sathya',
        age : 22,
        btechCompleted : true
    },
    {
        id : 53,
        name : 'Jhon',
        age : 23,
        btechCompleted : true
    },
    {
        id : 32,
        name : 'Jho',
        age : 23,
        btechCompleted : false
    },
    {
        id : 51,
        name : 'Doe',
        age : 22,
        btechCompleted : false
    },
    {
        id : 50,
        name : 'Willson',
        age : 20,
        btechCompleted : false
    }
]

let inLine = "";

//forEach
console.log("For each")
myFriends.forEach((friend) => {
    inLine += friend.age + " "
})
console.log(inLine);

//map
let inline = ""
console.log("map")
myFriends.map( (friend) => {
    inline += friend.age +  " "
})
console.log(inline)

//Another way of map by return type and returns an array
console.log("Another way of map by return type will returns as an array")
const myfriend = myFriends.map( (friend) => {
    return(
        friend.btechCompleted
    );
})
console.log(myfriend);

// Filter

//filter array of objects 
console.log("Normal filter function")
const myfriendBtech = myFriends.filter( (friend) => {
    return friend.btechCompleted === true   
});
console.log(myfriendBtech);

//Filter with filter
console.log("Normal filter function based on condition")
const myfriendBtechAge = myFriends.filter( (friend) => {
    return friend.btechCompleted === true   
}).filter( (friend) => {
    return friend.age > 22
})
console.log(myfriendBtechAge);

// Filter based on two diff conditions
const myfriendGraduated = myFriends.filter( friend => (friend.age > 21 && friend.btechCompleted === true));
console.log(myfriendGraduated);

//Filter with filter and map
console.log("Normal filter function based on condition")
const fltrWithFltrMap = myFriends.filter( (friend) => {
    return friend.btechCompleted === true ; 
}).filter( (friend) => {
    return friend.age <= 22
}).map( (friends) => {
    return friends.name
})
console.log(fltrWithFltrMap);


//Function with default return value
console.log("default value with function ")
function add(num1=1,num2=2) {
    console.log(num1+num2)
}

add()//default value is 3. if we pass numbers then it will add

add(4,5)// 9

//Constructor to use constructor use only capital for starting.
console.log("Function with constructor")
function Name(fName , lname , age) {
    this.firstName = fName;
    this.lastName = lname;
    this.age = age; 
}
const person1 = new Name("Rajesh" , "Varma" , 22);
const person2 = new Name("Ravi" , "Varma" , 21);
console.log(person1)
console.log(person2)


//For the form
let form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#msg');
const listItemsInput = document.querySelector('#name');


form = addEventListener('submit', (event) => {
    event.preventDefault()

    if(nameInput || emailInput === ''){
        setTimeout( () => {
            msgInput.classList.add('error')
            msgInput.innerHTML= "Please fill all the elements"
        },3000)
    } else {
        
    }
})
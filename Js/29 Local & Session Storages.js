console.log("hi");
/*
There are two types of storages are there. They are
1) Local Storage "This will store the values in string format"
    To convert the object or an array or anything we have json.stringify()  and parse().
    These are the functioms / operations performed on the Local Storage. 
        ->setItem('key','value')(This is used for create / update).
        ->getItem('key','value')  to read
        ->removeItem('key') to delete
        ->clear() used to clear/ to delete everything

2)Session Storage(Same functions are applicable for the session stotrage also.)
*/

//Local storage for simple string (to store a simple string in local storage).

let empName = "Jhon";

//to store this in local storage set
localStorage.setItem("name", empName);

//get
console.log(localStorage.getItem('name'));

//to delete the key
localStorage.removeItem('name');

//clear
localStorage.clear();

//Local storage with an array

let colors= [{id : 1, name : "red"},
    {id : 2, name : "white"},
    {id : 3, name : "blue"},
    {id : 4, name : "purple"},
    {id : 5, name : "pink"},
    {id : 6, name : "black"},
]

//To convert the data into string format use stringify()
localStorage.setItem('colorName', JSON.stringify(colors));
//Now it will be in string format
console.log(localStorage.getItem('colorName'));

//to get this in proper format use parse()
let theColors = JSON.parse(localStorage.getItem('colorName'));
console.log(theColors);

//to delete use removeItem()
localStorage.removeItem('colorName');
localStorage.clear();

//session storage with simple string
let stuName = "Rv"

//set item
sessionStorage.setItem('studentName',stuName);

let brand = [{id : 1, name : "Mi"},
    {id : 1, name : "poco"},
    {id : 1, name : "realme"},
    {id : 1, name : "redmi"},
    {id : 1, name : "oppo"},
];
let brandString = JSON.stringify(brand)
sessionStorage.setItem('brandItems', brandString); 

//get item
console.log(sessionStorage.getItem('brandItems'));
console.log(JSON.parse(sessionStorage.getItem('brandItems')))

//delete
sessionStorage.removeItem('brandItems')

//clear
sessionStorage.clear();



//Practice for Storage sessions
let cityNames = ["Gorantla", "Hindhupur", "Kadiri", "Puttaparthi", "Dharmavaram","Anantapur"] ;
localStorage.setItem('cityNamesLocal',JSON.stringify(cityNames));
console.log(JSON.parse(localStorage.getItem('cityNamesLocal')));

let favNumbers = [22,03,2001,11,06,2001];
localStorage.setItem('favNumbersLocal',favNumbers);
console.log(localStorage.getItem('favNumbersLocal'));

let favNumbers1 = [22,03,2001,11,06,2001];
localStorage.setItem('favNumbersLocal1',JSON.stringify(favNumbers1));
console.log(JSON.parse(localStorage.getItem('favNumbersLocal1')));


//update

localStorage.setItem('favNumbersLocal',JSON.stringify(favNumbers));

//remove

localStorage.removeItem('favNumbersLocal');
console.log(localStorage.getItem('favNumbersLocal1'));
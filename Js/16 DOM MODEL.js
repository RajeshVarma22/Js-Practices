console.error("Welcome to Data Object Model")
//window.alert("Welcome to DATA OBJECT MODEL")
console.log(document)

// Title
console.log(document.title)
document.title = "DOM Model"

// Head
console.log(document.head)

// Body
console.log(document.body)

//Tag selector
document.querySelector("h1").style.color = "purple"

// Specific tag that shows in console 
let h1Tag =  document.querySelector("h1");
console.log(h1Tag); 

// aTag that shows in console
let aTag = document.querySelector("nav a");
console.log(aTag)

// The text present in the h1 tag can accesed by these
let theText = h1Tag.innerText;
console.log(theText)
//the above can be written as shown in below
console.log(h1Tag.innerText)

//Change the text present in  the anchor tag
aTag.innerText = "Anchor Tag";

//By the help of the id we can access it as shown in below
console.warn('document.querySelector("#msg");')
let h2Tag = document.querySelector("#msg");
console.log(h2Tag)
msg.innerText = "This text was added with the help of js"
let atag1 = document.querySelector("div a");
console.log(atag1)
//the above can be witten as
console.log(document.querySelector("div a"))

//adding styles
h2Tag.style.backgroundColor = "pink";
h2Tag.style.padding = "10px"
h2Tag.style.textAlign = "center"
msg.style.color = "green"

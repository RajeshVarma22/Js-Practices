// Examine the document Objects
// console.dir(document); //Gives total info
// console.log(document); //Shows the HTML
// console.log(document.domain); //Shows the domain 127.0.0.1
// console.log(document.URL); //Shows the url
// console.log(document.title); // Shows doc title
// document.title = "List"; //Changes the doc title
// console.log(document.doctype); // Shows the doc type
// console.log(document.head); // Shows the head element
// console.log(document.body); // Shows the body element
// console.log(document.all); // Shows the all elements with class and id
// console.log(document.all[17]); // Shows particular element
// console.log(document.forms); // Shows the forms present, as html collection
// console.log(document.forms[0]); // Shows the particular form based on the index
// console.log(document.links); // Shows all the links present  as html collection
// console.log(document.images); // Shows all the images present  as html collection

// Selectors

// byId
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// console.log("textContent--> ",headerTitle.textContent);
// headerTitle.textContent = "innerText";
// headerTitle.innerText = "innerText";
// console.log("innerText --> ",headerTitle.innerText);
// console.log(headerTitle.innerHTML);

// Changing style

// headerTitle.style.background = 'red';
// headerTitle.style.textAlign = 'center';
// console.log(headerTitle.style);

// getElementByClassName

// var items =  document.getElementsByClassName('list-group-item');
// console.log(items); // shows as collection and has index
// console.log(items[1]); // Shows the 2nd element
// items[1].innerText = "Hello"; 
// // items[2].style.background = 'violet';
// // items[2].style.background = 'violet';
// // items[2].style.color = 'white';

// for(var i = 0; i < items.length; i++){
//     items[i].style.background = 'grey';
//     items[i].style.color = 'white';
// }


// GETELEMENTSBYATTRIBUTE //


// var items =  document.getElementsByTagName('li');
// console.log(items); // shows as collection and has index
// console.log(items[1]); // Shows the 2nd element
// items[1].innerText = "Hello"; 
// // items[2].style.background = 'violet';
// // items[2].style.background = 'violet';
// // items[2].style.color = 'white';

// for(var i = 0; i < items.length; i++){
//     items[i].style.background = 'grey';
//     items[i].style.color = 'white';
// }


// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = '3px solid grey';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "send";

// var nthChild = document.querySelector('.list-group-item:nth-child(2)');
// nthChild.style.color = 'red';

// var firstChild = document.querySelector('.list-group-item:first-child');
// firstChild.style.color = 'blue';

// var lastchild = document.querySelector('.list-group-item:last-child');
// lastchild.style.color = 'violet';

// // QUERYSELECTORALL //
// var oddChilds = document.querySelectorAll('li:nth-child(odd)');
// var evenChilds = document.querySelectorAll('li:nth-child(even)');
// // oddChilds.style.background = 'grey'; // error

// for(var i = 0; i<oddChilds.length; i++ ){
//     oddChilds[i].style.background = 'lightgrey';
//     evenChilds[i].style.background = '#aaad';
// }
 
// TRAVERSING THE DOM //

// Parent Node
// var itemsList = document.querySelector('#items');
// console.log(itemsList.parentNode.parentElement.parentElement);
// itemsList.parentNode.parentElement.parentElement.style.background = 'lightgrey'
// console.log(itemsList.parentElement.parentNode);
// itemsList.parentElement.style.background = '#fefc'


// Creating a new Element
// var newDiv = document.createElement('div');

// Adding class to newDiv
// newDiv.className = 'jsClass';

// Adding id to it
// newDiv.id = 'jsId';

// Adding attribute and value to it
// newDiv.setAttribute('title','jsHello');

// Creating a newtext node
// var newDivTextNode = document.createTextNode('Added this elemnt, id, class, title"attribute" from JavaScript');

// Appending newDivTextNode to newDiv
// newDiv.appendChild(newDivTextNode);

// This also works
// newDiv.innerText = 'Added Element From JavaScript'

// Adding newDiv to the html 
// var container = document.querySelector('#cont .extra');
// console.log(addItemsUp)
// var beforeCard = document.querySelector('#newInsert');
// console.log(beforeCard)

// container.insertBefore(newDiv , beforeCard);


// console.log(newDiv);

let button = document.querySelector('#button');
button.addEventListener('click', (e) => {
    // console.log(e.target); // Shows the particular element
    // console.log(e.target.value);
    // console.log(e.target.className);
    // console.log(e.target.id);
    button.innerText = 'Clicked';
    // button.style.backgroudColor = 'red';//Not working
    button.classList='btn btn-danger';
    button.className = 'btn';
    console.log(button.className);
    console.log(button.style);
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.clientX); // Position of mouse on x-axis from wimdow
    console.log(e.clientY); // Position of mouse on y-axis from wimdow
    console.log(e.offsetX); // Position of mouse on x-axis from actual element
    console.log(e.offsetY); // Position of mouse on y-axis from actual element
    console.log(e.altKey); // It will be true when you hold alt key and click the buttion 
    console.log(e.ctrlKey); // It will be true when you hold ctrl key and click the buttion 
    console.log(e.shiftKey); // It will be true when you hold shift key and click the buttion 
    button.setAttribute('title','submit');
    console.log(button.title);
})

// Different Events
// let button = document.querySelector('#button');
let box = document.querySelector('#box');
let output = document.querySelector('.output');
let text = document.querySelector('#textEvents')
// button.addEventListener('click' , runEvent); // Click
// button.addEventListener('dblclick' , runEvent); // dblClick
// button.addEventListener('mouseup' , runEvent); // mouseup
// button.addEventListener('mousedown' , runEvent); // mousedown

// box.addEventListener('mouseover' , runEvent); // mousehover applicable if child is present
// box.addEventListener('mouseout' , runEvent); // mouseout if the mouse is out of form element to text

// box.addEventListener('mouseenter' , runEvent); // Parent
// box.addEventListener('mouseleave' , runEvent); // Parent

// box.addEventListener('mousemove' , runEvent);

// output.addEventListener('mousemove', runEvent);
// text.addEventListener('mousemove' , runEvent);

// Key events
let input = document.querySelector('input[type=text]');
// input.addEventListener('keyup' , runEvent); // Key press and leave increases
// input.addEventListener('keydown' , runEvent); // key press and hold increases
// input.addEventListener('keypress' , runEvent); // key press and hold increases

// input.addEventListener('focus' , runEvent); // Click on input increases
// input.addEventListener('blur' , runEvent); // Remove and click on outside of input increases

// input.addEventListener('cut' , runEvent); // Click on input increases
// input.addEventListener('paste' , runEvent); // Remove and click on outside of input increases
// input.addEventListener('copy' , runEvent); // Remove and click on outside of input increases

// input.addEventListener('input' , runEvent); // Remove and click on outside of input increases


let changeEvent = document.querySelector('.change');
// changeEvent.addEventListener('change', runEvent);

let form = document.querySelector('form');
// console.log(submit)
form.addEventListener('submit', runEvent);

// count = 0
function runEvent(e) {
    // e.preventDefault();
    console.log(e.type)
    console.log(e.target.value)
    // document.body.style.display = 'none'; //Hides the total body cut/copy/paste the text
    // console.log(count += 1)

    // output.innerHTML = `<h3>Mouse X : ${e.offsetX }, Mouse Y : ${e.offsetY}</h3>` // Shows the mouse move on x and y axis in webpage
    // output.style.backgroundColor = `rgb(${e.offsetX} ,60 , ${e.offsetY})` // Shows different colors
    // text.style.color = `rgb(180,${e.offsetY} , ${e.offsetX})`

}

// var runEvent = ( (e) => {
//     console.log(e.type)      //Not Working
// })
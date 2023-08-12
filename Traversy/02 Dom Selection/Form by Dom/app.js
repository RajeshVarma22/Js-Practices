const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

form.addEventListener('submit', e => {
    e.preventDefault();

    //Getting input item from form
    let  inputItem = document.querySelector('#inputText').value;
    // console.log(inputItem);

    // Creating new List Item
    let list = document.createElement('li');

    // Adding classes to the list
    list.classList = 'list-group-item';

    // Appending new child to the current list

    list.appendChild(document.createTextNode(inputItem));

    //Creating delete button
    let btn = document.createElement('button');

    // Adding classes to button
    btn.classList = 'btn btn-danger btn-sm delete dltbtn'

    // Appending textnode for button
    btn.appendChild(document.createTextNode('X'));

    //Appending button to newListItem
    list.appendChild(btn);

    // console.log(btn);

    // console.log(list);
    // console.log(itemList);
    checkInput(inputItem, list);

    let empty = document.querySelector('#inputText');
    empty.value = "";
});

// Checking the inputItem
const checkInput = (input , item) => {
    let error = document.querySelector('#above');
    if(input === '' ){
        let msg = document.createElement('p');
        msg.appendChild(document.createTextNode("Please fill here ...."));
        msg.classList = 'error';
       // Displaying error in ui

       let m = form.insertBefore(msg,error);

        setTimeout( () => m.remove(),2000);
        // console.log(msg);
    } else {
        itemList.appendChild(item);
    }
}


// Deleting from the list
itemList.addEventListener('click' , (e) => {
    if( e.target.classList.contains('delete')){
        let parent = e.target.parentElement;
        parent.remove();
    }
    if(itemList.childElementCount === 0 ){
        let error = document.querySelector('#above');
        let msg = document.createElement('p');
        msg.appendChild(document.createTextNode("Tasks are empty, Please add a new task ...."));
        msg.classList = 'error';
       // Displaying error in ui

       let m = form.insertBefore(msg,error);

        setTimeout( () => m.remove(),3000);
    }
});


//Searching
filter.addEventListener('keyup' , (e) => {
    // Convert the search text to lower case
    let text = e.target.value.toLowerCase();
    // Get the listItems present in the list 
    let items = itemList.getElementsByTagName('li');
    // Here the items will be in html collection to convert it use array.from(items)
    Array.from(items).forEach(li => {
        // Get the first element text present in the li
        let itemName = li.firstChild.textContent;
        // Convert it to lower case, Compare it
        if(itemName.toLowerCase().includes(text) != -1){ //here indexOf includes search can be used
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
})






// const form = document.querySelector('#addForm');
// const itemsList = document.querySelector('#items');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     //Get the element
//     let inputItem = document.querySelector('#inputText').value;

//     //Create new li element
//     let li = document.createElement('li');

//     //Adding class
//     li.classList = 'list-group-item';
    
//     //Appending the new child to the list
//     li.appendChild(document.createTextNode(inputItem));

//     //Create delete btn

//     let dltBtn = document.createElement('buttonn');
//     dltBtn.classList = 'btn btn-danger btn-sm dltbtn delete';

//     //Inserting text into btn
//     dltBtn.appendChild(document.createTextNode('X'));

//     //Appending btn into li
//     li.appendChild(dltBtn);

//     //Append li to list
//     itemsList.appendChild(li);

//     // console.log(itemsList)

// });
// // console.log(itemsList);

// itemsList.addEventListener('click' , (e) => {
//     if(e.target.classList.contains('delete')){
//         console.log(e.target.parentElement);
//         if(confirm(`Are you sure you want to remove it!`)){
//             let lis = e.target.parentElement;
//             console.log(lis);
//             lis.remove();
           
//         }
//     }
// })


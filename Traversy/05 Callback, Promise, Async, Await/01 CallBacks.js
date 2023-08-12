    const bookDetails = [
    {title : "Never Give Up", author : "Ginger"},
    {title : "Don't let it go", author : "Miner"},
];

let insert = document.getElementById('here');
insert.innerHTML = `<div class="bg-info p-3 m-5 text-white">
                <ul id = "list">

                </ul>
            </div>`

let renderBooks = () => {
    let output = '';
    setTimeout( () => {
        bookDetails.forEach( (book) => {
            output += `<li class = 'list-group-item'>Title: ${book.title}</li>`
        });
        document.querySelector('#list').innerHTML = output;
        // console.log(output);
        // console.log(document.querySelector('#list'));
    },1000);
};
renderBooks();


const addingExtraBooks1 = (addBook, callItBack) => {
    setTimeout( () => {
        bookDetails.push(addBook);
        callItBack(); //It's responsible for the callback
        console.log(bookDetails);
    },2000);
};

addingExtraBooks1( {title: 'Hold Your Breathe' , author : 'kane'}, renderBooks);
addingExtraBooks1( {title: 'Aim for your success' , author : 'Jhon'}, renderBooks);


const addingExtraBooks2 = (addAnotherBook, callItBack) => {
    setTimeout( () => {
        bookDetails.push(addAnotherBook);
        callItBack();
    },5000);
}

addingExtraBooks2( {title : 'Get out of dreems', author : 'Mike'}, renderBooks);
addingExtraBooks2( {title : 'Never let you down', author : 'Willson'}, renderBooks);
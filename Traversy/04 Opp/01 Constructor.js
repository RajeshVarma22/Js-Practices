function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getDetails = function () {
        return `${this.author}${this.year}`;
    };
};

// // Prototype to get all the summary
// Book.prototype.getDetails = function () {
//     return `${this.title}`;
// }

const book1 = new Book("Never give Up" , ".........", 1997);
console.log(book1);
console.log(book1.getDetails()); 
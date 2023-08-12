const users = [
    {name: 'User 1', age: 21, year : 1991, start : 1991, end : 1998, company : 'nighingale'},
    {name: 'User 2', age: 54, year : 1992, start : 1992, end : 1993, company : 'Rivertros'},
    {name: 'User 3', age: 31, year : 1982, start : 1982, end : 1983, company : 'Jikds'},
    {name: 'User 4', age: 33, year : 1953, start : 1953, end : 1953, company : 'Jikds'},
    {name: 'User 5', age: 44, year : 2012, start : 2012, end : 2013, company : 'Kingda'},
    {name: 'User 6', age: 33, year : 2014, start : 2014, end : 2022, company : 'Jikds'},
    {name: 'User 7', age: 21, year : 2019, start : 2019, end : 2012, company : ' lonf'}
];

const experience = [12,21,12,10,5,13,16,13,14,21,10];

// // Normal for loop
// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// } 

// console.log("forEach Loop")
// // forEach loop
// let ages = '';
// users.forEach( (user) => {
//     // console.log(user.age);
//     ages += `Name :${user.name}, Age :${user.age}    ||     `;
// })
// console.log(ages);

// Filter

// const userSrExp1 = experience.filter( (age) => {
//     if(age >= 13){
//         return true;
//     }
// })

// console.log(userSrExp1);
 
// // Short hand
// const userSrExp = experience.filter( age => age > 12);
// console.log(userSrExp);

// // Another
// const usersAge = users.filter( (user) => {
//     return user.age >= 22;
// });

// console.log(usersAge);

// const company = users.filter( user => user.company === 'Jikds').filter( user => user.age == 33);
// console.log(company);

// const expUsers = users.filter( user => (user.age > 21 && user.year >= 2000));
// console.log(expUsers);

// Map 

// const yearJoin = users.map( (user) => {
//     return `${user.name} ==> ${user.year}`;
// });
// console.log(yearJoin);

// const totalService = users.map( (user) => `${user.name} ==> [${user.start} - ${user.end}]`);
// console.log(totalService);

// Map 
let div = document.createElement('div');
div.classList = 'bg-primary parent';
let toAbove = document.querySelector('.above');
let body = document.querySelector('body');
body.insertBefore(div, toAbove);
let parent = document.getElementsByClassName('parent');
console.log(parent);
// let items = users.map( (user) => {
//     return(
//         `<h1>${user.name}</h1>`
//     )
// });
// console.log(items);
// body.insertBefore(items, toAbove);
console.log(body);
console.log(div); 



// const experienceB = experience.map((ex) => )
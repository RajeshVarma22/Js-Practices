// date obj
console.error('Date obj for today date is:- new Date()')
let date = new Date();
console.log(date)

//Proper date
console.error("proper date can be written as:- new Date().toLocaleDateString")
let currentDate = new Date().toLocaleDateString();
console.log(currentDate)

//proper time
console.error("proper time can be written as:- new Date().toLocaleTimeString")
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime)

// USA Date 
console.error("proper time can be written as:- let option = {timeZone : 'America/New_York'};    let usaDate = new Date().toLocaleDateString('en-US', option)")
let option = {timeZone : 'America/New_York'};
let usaDate = new Date().toLocaleDateString('en-US', option)
console.log(usaDate)

// USA Time 
console.error("proper time to other countries can be written as:- let option1 = {timeZone : 'America/New_York'};    let usaTime = new Date().toLocaleTimeString('en-US', option1)")
let option1 = {timeZone : 'America/New_York'};
let usaTime = new Date().toLocaleTimeString('en-US', option1)
console.log(usaTime)

//today
console.error("to get today new Date().getDay();    this will show in num like 0(sun)-6(sat)")
let today = new Date().getDay();
console.log(today);
//
let day = new Date().getDay();
let today1 = '';
switch (day) {
    case 0:
        today1 = "Sunday";
        break;
    case 1:
        today1 = "M0nday";
        break;
    case 2:
        today1 = "Tuesday";
        break;
    case 3:
        today1 = "Wednesday";
        break;
    case 4:
        today1 = "Thursady";
        break;
    case 5:
        today1 = "Friday";
        break;
    case 6:
        today1 = "Saturday";
        break;
    default:
        today1 = "Eneter proper day";
        break;
}
console.log(`Today is:${today1}`);  

let Time = new Date().getTime().toLocaleString()
console.log(Time)

let month = new Date().getMinutes();
console.log(month)
console.warn("similarly for the getMinutes, date, time, millisecs, etc")


// custom date
console.error("custom date");
let c_date = new Date().getDate();
let c_month = new Date().getMonth();
let c_year = new Date().getFullYear();
console.log(`${c_date}-0${c_month}-${c_year}`)
console.log(`${c_date}/0${c_month}/${c_year}`)
console.log(`${c_date}-0${c_month}/${c_year}`)
console.log(`${c_date} $ 0${c_month} $ ${c_year}`)
console.log(`${c_date} $_/][] 0${c_month} $-/${c_year}`)





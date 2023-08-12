console.time("Time")
let count = 1;
let interval = 0;
let greet = () => {
    console.log(`Hello Rajesh how are you :${count}`);
    console.log(new Date().toLocaleTimeString());
    count++;
}
interval = setInterval(greet, 1000);
console.log(new Date().toLocaleTimeString());
setTimeout(() =>{
    clearInterval(interval);
} , 3000);
console.timeEnd("Time")
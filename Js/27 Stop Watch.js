let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;
let timerRunning = false;

startTimer = () => {
    count++;

    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100)-(minutes*60));
    milliseconds = Math.floor(count-(seconds*100)-(minutes*6000))
    document.querySelector('#minutes').innerHTML = zero(minutes);
    document.querySelector('#seconds').innerHTML = zero(seconds);
    document.querySelector('#milliSeconds').innerHTML = zero(milliseconds);

};

//Click to start button
let startButton = document.querySelector('#startBtn');
startButton.addEventListener('click', function(){
    if(!timerRunning){  // Here first timerRunning=false and when you click the if statement says that !timerRunning i.e true. After that the timerRunning is true such that it will not enter into the if statement.
        interval = setInterval(startTimer,10); //start the timer
        timerRunning = true;
        // console.log(count, 'start');
    }
});


//Click to stop button
let stopButton = document.querySelector('#stopBtn');
stopButton.addEventListener('click', function(){
    clearInterval(interval); //stop the timer i.e interval
    timerRunning = false;
    // console.log(count,"stop")
});


//Click to reset button
let resetButton = document.querySelector('#resetBtn');
resetButton.addEventListener('click', function(){
    clearInterval(interval); //stop the timer i.e interval
    count = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    interval = 0;
    timerRunning = false;
    document.querySelector('#minutes').innerHTML = "00";
    document.querySelector('#seconds').innerHTML = "00";
    document.querySelector('#milliSeconds').innerHTML = "00";
});



//Zero adding
let zero = (time) =>{
    if(time <= 9){
        return "0" + time;
    }
    else {
        return time;
    }
}
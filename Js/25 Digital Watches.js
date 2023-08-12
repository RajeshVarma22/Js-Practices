let indianTime = () => {
    let options = { timeZone : 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#indiaDate').innerText = currentDate;
    document.querySelector('#indiaTime').innerText = currentTime; 
};
setInterval(indianTime, 1000);

//USA Time

let usaTime = () => {
    let timeInUS = {timeZone : 'America/New_York'};
    document.querySelector('#usaDate').innerText = new Date().toLocaleDateString('en-US',timeInUS);
    document.querySelector('#usaTime').innerText = new Date().toLocaleTimeString('en-US',timeInUS);
}
setInterval(usaTime, 1000);

//Germany Time

let germanyTime = () => {
    document.querySelector('#germanyDate').innerText = new Date().toLocaleDateString('en-US',{timeZone : 'Europe/Berlin'});
    document.querySelector('#germanyTime').innerText = new Date().toLocaleTimeString('en-US', {timeZone : 'Europe/Berlin'});
}
setInterval(germanyTime,1000);

//China Time

let chinaTime = () => {
    document.querySelector('#chinaDate').innerText = new Date().toLocaleDateString('en-US',{timeZone : 'Asia/Shanghai'});
    document.querySelector('#chinaTime').innerText = new Date().toLocaleTimeString('en-US',{timeZone : 'Asia/Shanghai'});
}
setInterval(chinaTime,1000);
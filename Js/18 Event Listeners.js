let buttonFunction = (innerText,color,backgroundColor) => {
    let button = document.querySelector("#msg-1")
    button.innerText = innerText;
    button.style.color  = color;
    button.style.backgroundColor = backgroundColor
    button.style.padding = "30px";
    button.style.fontSize= "40px"
    button.style.borderRadius = "50px";
    button.style.border = "2px solid black";
    button.style.margin = "20px";
    button.style.display = "inline-block";
    button.style.textAlign = "center";
    button.style.verticalAlign = "middle";
    button.style.lineHeight = "200px";
    button.style.position = "relative";
    button.style.top = "0";
    button.style.left = "0";
    button.style.zIndex = "1";
    button.style.cursor = "pointer";
    button.style.textDecoration = "none";
    button.style.textTransform = "uppercase";
    button.style.textShadow = "2px 2px 2px black";
    button.style.transition = "all 0.5s ease-in-out";
    button.style.webkitTransition = "all 0.5s ease-in-out";
    button.style.mozTransition = "all 0.5s ease-in-out";
    button.style.msTransition = "all 0.5s ease-in-out";
    button.style.oTransition = "all 0.5s ease-in-out";
    button.style.transitionTimingFunction = "ease-in-out";
    button.style.webkitTransitionTimingFunction = "ease-in-out";
    button.style.mozTransitionTimingFunction = "ease-in-out";
    button.style.msTransitionTimingFunction = "ease-in-out";
    button.style.oTransitionTimingFunction = "ease-in-out";
    button.style.transitionDuration = "0.5s";
    button.style.webkitTransitionDuration = "0.5s";
    button.style.mozTransitionDuration = "0.5s";
    button.style.msTransitionDuration = "0.5s";
    button.style.oTransitionDuration = "0.5s";
    button.style.transitionProperty = "all";
    button.style.webkitTransitionProperty = "all";
    button.style.mozTransitionProperty = "all";
    button.style.msTransitionProperty = "all";
    button.style.oTransitionProperty = "all";
    button.style.transitionDelay = "0s";
    button.style.webkitTransitionDelay = "0s";
    button.style.mozTransitionDelay = "0s";
    button.style.msTransitionDelay = "0s";
    button.style.oTransitionDelay = "0s";
}
// Grey Button
let Greybtn =  document.querySelector("#Grey-btn")
Greybtn.addEventListener('click',function () {
    buttonFunction('You clicked the Grey button', 'white', 'Grey');
});
//Black-btn
let Blackbtn =  document.querySelector("#Black-btn")
Blackbtn.addEventListener('dblclick',function () {
    buttonFunction('You clicked the Black button', 'white', 'Black');
});
//Brown-btn
let Brownbtn =  document.querySelector("#Brown-btn")
Brownbtn.addEventListener('mouseover',function () {
    buttonFunction('You Mouseover the Brown button', 'white', 'Brown');
});
// Green-btn
let Greenbtn =  document.querySelector("#Green-btn")
Greenbtn.addEventListener('mousewheel',function () {
    buttonFunction('You mousewheel the green button', 'yellow', 'green');
});
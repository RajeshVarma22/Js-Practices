let button1On = () => {
    let h2Tag = document.querySelector("#msg-1");
    h2Tag.innerText = "This is Grey Color";
    h2Tag.style.backgroundColor="grey";
    h2Tag.style.padding= "10px";
    h2Tag.style.borderRadius= "30px"
    h2Tag.style.color= "White"
};
let button2On = () => {
    let h2Tag = document.querySelector("#msg-1");
    h2Tag.innerText = "This is Black Color";
    h2Tag.style.backgroundColor="black";
    h2Tag.style.padding= "10px";
    h2Tag.style.borderRadius= "30px"
    h2Tag.style.color= "White"
};
let button3On = () => {
    let h2Tag = document.querySelector("#msg-1");
    h2Tag.innerText = "This is Brown Color";
    h2Tag.style.backgroundColor="brown";
    h2Tag.style.padding= "10px";
    h2Tag.style.borderRadius= "30px"
    h2Tag.style.color= "White"
};
let button4On = () => {
    let h2Tag = document.querySelector("#msg-1");
    h2Tag.innerText = "This is Green Color";
    h2Tag.style.backgroundColor="green";
    h2Tag.style.padding= "10px";
    h2Tag.style.borderRadius= "30px"
    h2Tag.style.color= "White"
};
let  button5On = () => {
    let listFunctionButtons = document.querySelector("div ol");
    listFunctionButtons.style.backgroundColor="violet";
    listFunctionButtons.style.color="White";
    listFunctionButtons.style.textAlign="left";
    listFunctionButtons.style.padding="40px";
    listFunctionButtons.style.margin="20px";
    listFunctionButtons.style.borderRadius="40px";
}


//Shortcut for the above lines
let shortCutButton = (innerText,color) => {
    let h3Tag = document.querySelector("#div2");
    h3Tag.innerText = innerText;
    h3Tag.style.backgroundColor=color;
    h3Tag.style.padding= "150px";
    h3Tag.style.borderRadius= "30px"
    h3Tag.style.color= "White"
    h3Tag.style.fontSize = "60px"
    let h2Tag = document.querySelector("#sthortCut")
    h2Tag.innerHTML = "This is color"
}
//User Name

let textBox1 = document.querySelector('#textUsername');
textBox1.addEventListener('keyup', function(){
    let textEnteredValue = textBox1.value;
    let textToCopy = document.querySelector('#userNameDetails');
    textToCopy.innerText = textEnteredValue;
});

//Password

let textBox2 = document.querySelector('#textPassword');
textBox2.addEventListener('keyup', function(){
    let textEnteredValue = textBox2.value;
    document.querySelector('#passwordDetails').innerText = textEnteredValue;
});

//Mail

document.querySelector('#textMail').addEventListener('keyup', function(){
    document.querySelector('#emailDetails').innerText = document.querySelector('#textMail').value;
});

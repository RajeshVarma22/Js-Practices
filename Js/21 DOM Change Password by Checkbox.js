let passwordBox = document.querySelector('#pswrd');
let checkBox = document.querySelector('#chkbx');  
checkBox.addEventListener('change', function(){
    let typeAttribute =passwordBox.getAttribute('type');
    if(typeAttribute === 'password'){
        passwordBox.setAttribute('type', 'text');
    }
    else{
        passwordBox.setAttribute('type', 'password')
    }
});

const form = document.querySelector('#my-form');
const nameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const msgEl = document.querySelector('.msg');
const userListEl = document.querySelector('.users');

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    
    if(nameEl.value  === "" && emailEl.value  === ""){
        msgEl.classList.add('error');
        msgEl.innerHTML = 'Please fill all the fields'

        setTimeout( () => msgEl.remove(),3000);
    } else {
        // console.log(`${nameEl.value} ${emailEl.value}`)

        const li = document.createElement('li');
        // console.log(li)
        li.appendChild(document.createTextNode(`${nameEl.value}  : ${emailEl.value}`))
        // console.log(li)
        userListEl.appendChild(li)

        //Clear fields
        nameEl.value = "";
        emailEl.value = "";
    }
})
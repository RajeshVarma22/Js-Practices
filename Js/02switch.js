let day = new Date().getDate();
let today = "";
day = 6;
switch (day) {
    case 0:
        today = "Sunday";
        break;
    case 1:
        today = "M0nday";
        break;
    case 2:
        today = "Tuesday";
        break;
    case 3:
        today = "Wednesday";
        break;
    case 4:
        today = "Thursady";
        break;
    case 5:
        today = "Friday";
        break;
    case 6:
        today = "Saturday";
        break;
    default:
        today = "Eneter proper day";
        break;
    }
console.log(today);      


let button = document.querySelector('.btn');
button.addEventListener('dblclick',(e) => {
    // console.log('X Value = ', e.offsetX)
    // console.log('Y Value = ' , e.offsetY)
    // console.log('X Value = ' , e.clientX)
    // console.log('Y Value = ' , e.clientY)
    button.style.backgroundColor = 'deeppink';
    button.style.color = 'white';
    button.style.borderRadius = '50%';
    button.innerText = 'Murali Krishna Pobbathi From Kalluru Loves Monika Gangadher Ralladoddy From Kosigi'
})

let key = ( (e) => {
    if(e === 'p'){
        
        print('bsj')
    }
});


        

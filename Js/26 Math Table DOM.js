let numberEl = document.querySelector('#reqNum');
numberEl.addEventListener('keyup', function() {
    let theNumber = Number(numberEl.value); 
    document.querySelector('#number').innerText = theNumber;
    calculate();
});
let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input', function() {
    let selectedMultiplier = Number(rangeEl.value); 
    document.querySelector('#multi').innerText = selectedMultiplier;
    calculate();
});

let calculate = () =>{
    let theNumber = Number(document.querySelector('#number').innerText);
    let theMultiplier = Number(document.querySelector('#multi').innerText);
    let reslt = theNumber * theMultiplier;
    document.querySelector('#result').innerText = reslt;
};



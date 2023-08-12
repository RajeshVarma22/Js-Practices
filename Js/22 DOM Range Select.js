let rangeEl = document.querySelector('#range');
let amountEl = document.querySelector('#amount');
rangeEl.addEventListener('input',function() {
    let selectedAmount = rangeEl.value;
    amountEl.innerText = selectedAmount;
});
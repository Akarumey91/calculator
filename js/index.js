const display = document.querySelector('.display');
const btnEq = document.querySelector('.btn-eq');
const opers = document.querySelectorAll('.opers button');
const digits = document.querySelectorAll('.digits button');
const btnClear = document.querySelector('.clear');
const btnDot = document.querySelector('.dot');

const arr = ['+', '-', '*', '/'];


//Clocks
setInterval(() => {
    document.querySelector('.clock').innerText = (new Date()).toLocaleTimeString();
}, 1000);

//Digit buttons
digits.forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

//Oper buttons
opers.forEach(button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

//Eq-button
btnEq.addEventListener('click', () => display.value = eval(display.value.toString()).toFixed(9));

//Clear button
btnClear.addEventListener('click', () => display.value = '');

//Dot button
btnDot.addEventListener('click', dotPressed);

function dotPressed(ev) {
    display.value += ev.target.innerText;
}

//Repeating of operators


// function noRepeatOpers() {
//     
//     if (display.value.includes(operations)) {
//         display.value.replace(/operations/, operPressed)
//     }
// }
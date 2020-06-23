const converter = document.querySelector('#converter');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const result = document.querySelector('.result');
const changeBtn = document.querySelector('.change');
const resetBtn = document.querySelector('.reset');
const convBtn = document.querySelector('.conv');
let celsius;
let fahrenhait;

const swap = () => {
    if(one.innerText === 'C') {
        one.innerText = 'F';
        two.innerText = 'C';
        result.innerText = '';
    } else {
        one.innerText = 'C';
        two.innerText = 'F';
        result.innerText = '';
    }
}

const celToFahr = () => {
    fahrenhait = converter.value * 1.8 + 32;
    result.innerText = `${converter.value}C to ${fahrenhait.toFixed(1)}F`;
    converter.value = '';
}

const fahrToCel = () => {
    celsius = (converter.value - 32) / 1.8;
    result.innerText = `${converter.value}F to ${celsius.toFixed(1)}C`;
    converter.value = '';
}

const change = () => {
    if(converter.value !== '') {
        if(one.innerText === 'C') {
            celToFahr();
        } else {
            fahrToCel();
        }
    } else {
        result.innerText = 'Musisz wpisać jakąś liczbę';
    }
}

const reset = () => {
    converter.value = '';
    result.innerText = '';
}

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', change);
resetBtn.addEventListener('click', reset);
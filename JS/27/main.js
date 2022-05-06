const btnStart = document.body.querySelector('.main');
const btnReset = document.body.querySelector('.reset');
const div = document.body.querySelector('div div');

let flag = false;

let time = 0;
let idInterval;

const timer = () => {
    if (!flag) {
        flag = !flag;
        btnStart.textContent = 'Pause';
        idInterval = setInterval(start, 10);
    } else {
        flag = !flag;
        btnStart.textContent = 'Start';
        clearInterval(idInterval);
    }
}

const start = () => {
    time++;
    div.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    div.textContent = '---'
    clearInterval(idInterval);
    flag = false
    btnStart.textContent = 'Start';
}

btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset);
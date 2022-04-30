const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnDraw = document.querySelector('.showAdvice');
const btnShowAll = document.querySelector('.showOptions');


const input = document.querySelector('input');
const h1 = document.querySelector('h1');

const advices = ['Fight for it.', 'You can do this.'];

const addHandler = (e) => {
    e.preventDefault();
    advices.push(input.value);
    input.value = "";
};

const cleanHandler = () => {
    advices.length = 0;
    advices.push(['Fight for it.', 'You can do this.']);
};

const drawHandler = () => {
    const advice = advices[Math.floor(Math.random() * advices.length)];
    h1.textContent = advice;
};

const showAllHandler = () => {
    alert(`You have ${advices.length} advices. This are your advices:\n ${advices.join(',\n')}`);
};

btnAdd.addEventListener('click', addHandler);
btnClean.addEventListener('click', cleanHandler);
btnDraw.addEventListener('click', drawHandler);
btnShowAll.addEventListener('click', showAllHandler);
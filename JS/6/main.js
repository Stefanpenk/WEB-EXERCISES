let size = 10;
let orderElement = 1;

const clickHandler = () => {

};

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = "Add 10 list elements";
    const ul = document.createElement('ul');
    document.body.appendChild(btn);
    document.body.appendChild(ul);
    btn.addEventListener('click', clickHandler);
};

const createLiElements = () => {

};

init()
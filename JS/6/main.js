let size = 10;
let orderElement = 1;

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        const ul = document.querySelector('ul');
        ul.appendChild(li);
        li.textContent = `Element nr ${orderElement}`
        li.style.fontSize = `${size}px`;
        size++
        orderElement++
    }

};

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = "Add 10 list elements";
    const ul = document.createElement('ul');
    document.body.appendChild(btn);
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
};

init()
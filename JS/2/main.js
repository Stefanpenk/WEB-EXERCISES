const btn = document.querySelector('button');
const ul = document.querySelector('ul');
let number = 1

const handleButton = () => {
    const li = document.createElement('li');
    li.textContent = number;


    if (number % 3 === 0) {
        li.classList.add('big')
    }

    ul.appendChild(li);
    number++;

}

btn.addEventListener('click', handleButton);
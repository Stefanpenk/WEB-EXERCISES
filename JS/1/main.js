const btn = document.querySelector("button");
let number = 0;

const handleClick = () => {
    const myDiv = document.createElement('div');
    number++;
    myDiv.textContent = number;
    document.body.appendChild(myDiv);

    if (number % 5 === 0) {
        myDiv.classList.add('circle');
    };
}

btn.addEventListener('click', handleClick)
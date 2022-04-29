const btn = document.querySelector('button');
const liList = document.querySelectorAll('li');
let size = 10;


const handleClick = () => {
    size++;
    liList.forEach(li => {
        li.style.display = "block";
        li.style.fontSize = `${size}px`;
    })
}

btn.addEventListener('click', handleClick);
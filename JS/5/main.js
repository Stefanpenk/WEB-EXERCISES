const btn = document.querySelector('button');
const liList = document.querySelectorAll('li');
let size = 10;


const handleClick = () => {
    liList.forEach(li => {
        li.style.display = "block";
        li.style.fontSize = `${size}px`;
    })
    size++;
}

btn.addEventListener('click', handleClick);
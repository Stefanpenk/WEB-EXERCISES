document.body.style.height = "10000px";

const div = document.createElement('div');
div.style.width = "100%";
div.style.position = "fixed";
div.style.top = "0";
div.style.left = "0";
document.body.appendChild(div);

let number = 0
let grow = true;
let viewportHeight = window.innerHeight / 2;

const handleScroll = () => {
    if (grow) {
        number += 10;
        div.style.backgroundColor = "green";
    } else {
        number -= 10;
        div.style.backgroundColor = "red";
    }

    if (number >= viewportHeight) {
        grow = !grow;
    } else if (number === 0) {
        grow = !grow;
    }

    div.style.height = `${number}px`;
}

document.addEventListener('scroll', handleScroll);
const div = document.querySelector('div');
let number = 100;
div.style.width = `${number}px`;
div.style.height = `${number}px`;

let viewportWidth = window.innerWidth / 2;

let grow = 'true';

const handleScroll = () => {
    if (number >= viewportWidth) {
        grow = !grow;
    } else if (number === 0) {
        grow = !grow;
    }

    if (grow) {
        number += 20;

    } else {
        number -= 20;
    }

    div.style.width = `${number}px`;
    div.style.height = `${number}px`;
}

window.addEventListener('scroll', handleScroll);
let red = 50;
let green = 50;
let blue = 50;

document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

const changeColor = (e) => {
    let key = e.keyCode;


    switch (key) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}%, ${green > 0 ? --green : green}%, ${blue > 0 ? --blue : blue}%)`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red < 100 ? ++red : red}%, ${green < 100 ? ++green : green}%, ${blue < 100 ? ++blue : blue}%)`;
            break;
    }

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
};

window.addEventListener('keydown', changeColor)
// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/


const slideList = [{
        img: "images/img1.jpg",
        txt: 'First text'
    },
    {
        img: "images/img2.jpg",
        txt: 'Second text'
    },
    {
        img: "images/img3.jpg",
        txt: 'Third text'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

// Interfejs
const time = 1000;
let active = 0;


// Implementation
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].txt;
    changeDot()
}
let indexTyping = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {
    const key = e.keyCode;
    if (key === 37 || key === 39) {
        clearInterval(indexTyping);
        e.keyCode === 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0
        } else if (active < 0) {
            active = slideList.length - 1;
        }
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].txt;
    changeDot()
    indexTyping = setInterval(changeSlide, time)
}

// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)
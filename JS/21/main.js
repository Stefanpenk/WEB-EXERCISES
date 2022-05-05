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
]

const image = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];

//Interfejs 
const time = 3000;
let active = 0;



//Implementation
const changeDot = () => {
    const activeDot = dots.findIndex(dot =>
        dot.classList.contains('active')
    );
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
};

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].txt;
    changeDot()
};

setInterval(changeSlide, time);
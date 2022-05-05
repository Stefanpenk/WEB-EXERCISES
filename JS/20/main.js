const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['zaczynamy', 'drugi', 'koniec']

let indexLetter = -15;
let indexText = 0;
const time = 100;

// Implementation
const addLetter = () => {

    if (indexLetter >= 0) {
        spnText.textContent += txt[indexText][indexLetter];
    }
    indexLetter++;
    if (indexLetter === txt[indexText].length) {
        indexText++;
        if (indexText === txt.length) return;

        return setTimeout(() => {
            indexLetter = -15;
            spnText.textContent = "";
            addLetter()
        }, 2000)

    }
    setTimeout(addLetter, time)
}


addLetter(); //first activation


// cursor animation
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
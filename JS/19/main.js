const spanText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a, ut natus accusantium dolore alias minima ratione hic laboriosam culpa ea maiores temporibus nulla cupiditate veniam impedit magni distinctio quod.'

let indexText = 0;
const time = 20;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);
const timer = (sec = 0) => {
    let number = sec;

    return setInterval(() => {
        document.body.textContent = `${number} sekund`;
        number++;
    }, 1000)
};

const counter = timer();
counter()
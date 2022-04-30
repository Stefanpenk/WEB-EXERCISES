// min max. Whithout max.
// Math.random() * (max-min) + min;
Math.random() * (6 - 4) + 4;


// function that calculates values between min and max. Whithout max.
const numberRandom = (min, max) => {
    const number = Math.random() * (max - min) + min;
    return number;
}

// min max. Whith max.
// Math.floor(Math.random() * (max - min + 1) + min);
Math.floor(Math.random() * (6 - 4 + 1) + 4);

// function that calculates values between min and max. Whith max.
const numberRandomInt = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}
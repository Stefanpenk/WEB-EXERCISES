const changeColor = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    let color = "white";

    console.log(x, y);
    if (x % 2 === 0 && y % 2 === 0) {
        color = "red";
    } else if (x % 2 !== 0 && y % 2 !== 0) {
        color = "blue";
    } else {
        color = "green";
    }

    document.body.style.backgroundColor = `${color}`;
};

document.body.addEventListener('click', changeColor);
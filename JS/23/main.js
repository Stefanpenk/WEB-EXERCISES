const add = () => {
    let number = 0;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika to ${number}`;
    }
};

const counter = add();

document.addEventListener('click', counter)
const input = document.querySelector('input');
const div = document.querySelector('div');

const password = 'user';
const message = 'I will be at work till 19:00 today.'

input.addEventListener('input', (e) => {
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = '';
    } else {
        div.textContent = '';
    }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})
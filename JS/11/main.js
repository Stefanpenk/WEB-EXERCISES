const input = document.querySelector('input');
const div = document.querySelector('div');

const passwords = ['User', 'paSs'];
const messages = ['I will be at work till 19:00 today.', 'you should change your password.'];

//SINGLE PASSWORD HANDLER
// input.addEventListener('input', (e) => {
//     if (password === e.target.value) {
//         div.textContent = message;
//         e.target.value = '';
//     } else {
//         div.textContent = '';
//     }
// });

let lowerCasePasswords = [];

for (let i = 0; i < passwords.length; i++) {
    lowerCasePasswords[i] = passwords[i].toLowerCase();
}

//MULTI PASSWORDS HANDLER
input.addEventListener('input', (e) => {
    div.textContent = " ";
    const text = e.target.value.toLowerCase();
    console.log(text);

    lowerCasePasswords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    });

});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
});
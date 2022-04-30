const input = document.querySelector('input');
const div = document.querySelector('div');

const passwords = ['user', 'pass'];
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


//MULTI PASSWORDS HANDLER
input.addEventListener('input', (e) => {
    div.textContent = " ";
    const text = e.target.value;

    passwords.forEach((password, index, array) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
            console.log(array)
        }
    })

});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
});
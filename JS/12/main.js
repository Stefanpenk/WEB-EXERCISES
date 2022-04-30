const input = document.querySelector("input");
const passwords = ['oNe', 'tWo'];
const messages = ["great", "works"];
const div = document.querySelector('div');


const lowerCasePass = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for (let i = 0; i < lowerCasePass.length; i++) {
        if (textInput === lowerCasePass[i]) {
            div.textContent = messages[i];
        }
    }
}

input.addEventListener("input", showMessage)
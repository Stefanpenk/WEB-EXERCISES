const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["John", "Kate", "Mike", "Anna", "Kira", "Marry", "Andrew", "Matt"];

const prefixs = ["I think that", "I am sure that", "Honestly, I think that", "That should be", "I am 100% hunder that it should be", "I am convinced that"];




const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    const prefixIndex = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[prefixIndex]} ${names[index]}.`;
}

btn.addEventListener('click', nameGenerator)
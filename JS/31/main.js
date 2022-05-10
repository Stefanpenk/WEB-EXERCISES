const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('span');
//getElementsByClassName creates HTMLCollection pseudo Array that is updated live.
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;

}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>Delete</button>';
    ul.appendChild(task);
    input.value = "";

    // Adding number to <span></span>
    // const liItems = document.querySelectorAll('li.task').length;
    // taskNumber.textContent = liItems;

    //Works because taskNumber is updated live thanks to getElementsByClassName.
    taskNumber.textContent = listItems.length;

    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask)
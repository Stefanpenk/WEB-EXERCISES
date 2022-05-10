const removeTask = (e) => {
    //delete element that is clicked:
    // e.target.remove();

    //delete parrent element that is clicked:
    // e.target.parentNode.remove();

    //delete button + crossed out text:
    // e.target.parentNode.style.textDecoration = 'line-through';
    // e.target.remove();

    //delete with attribute data-key - universal way
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove()
}

document.querySelectorAll('li button[data-key]').forEach(item => {
    item.addEventListener('click', removeTask)
})
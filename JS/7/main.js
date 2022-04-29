const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', (e) => {
  h1.textContent = `${e.clientX}, ${e.clientY}`;
})
const btn = document.querySelector('.nav-button');
const list = document.querySelector('.drop-down');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    list.classList.toggle('closed');
})

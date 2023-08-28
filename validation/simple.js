const pass = document.querySelector('.pass');
const email = document.querySelector('.email');
const err = document.querySelector('.err');
const errEmail = document.querySelector('.errEmail');
const valid = document.querySelector('.valid');

valid.addEventListener('click', (e) => {
    e.preventDefault();
    if (!pass.value) {
        err.style.display = 'block';
    } else {
        err.style.display = 'none';
    }
    if (!email.value) {
        errEmail.style.display = 'block';
    } else {
        errEmail.style.display = 'none';
    }
})

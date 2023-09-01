const body = document.querySelector('#body');

let clicker = false;
if (JSON.parse(localStorage.getItem('flag'))) {
    body.classList.add('toggle');
    clicker = true;
} else {
    body.classList.remove('toggle');
    clicker = false;
}
body.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    clicker = !clicker;
    body.classList.toggle('toggle');
    if (clicker) {
        const hash = btoa('true');
        localStorage.setItem('flag', hash)
    }
    else
        localStorage.setItem('flag', 'false')
})


const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('button');

// Обработчик события всплытия
outer.addEventListener('click', () => {
    console.log('Outer div clicked');
});

inner.addEventListener('click', () => {

    console.log('Inner div clicked');
});

button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Button clicked');
});
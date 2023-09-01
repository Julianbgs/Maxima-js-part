const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');
const button = document.getElementById('button');

outer.addEventListener('click', () => {
    console.log('Outer div clicked');
}, true); // Включаем режим погружения

middle.addEventListener('click', () => {
    console.log('Middle div clicked');
}, true);

inner.addEventListener('click', () => {
    console.log('Inner div clicked');
}, true);

button.addEventListener('click', () => {
    console.log('Button clicked');
}, true);
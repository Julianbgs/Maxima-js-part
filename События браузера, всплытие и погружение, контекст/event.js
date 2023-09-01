// 1. Клик (click):
// Событие click возникает при клике на элементе мышью.

// const button = document.getElementById('myButton');
// button.addEventListener('click', () => {
//     alert('Button clicked!');
// });
// 2. Нажатие клавиши (keydown):
// Событие keydown возникает при нажатии клавиши на клавиатуре.

const input = document.getElementById('myInput');
input.addEventListener('change', (event) => {
    console.log('Key pressed:', event.target.value);
});
// 3. Загрузка документа (load):
// // Событие load возникает, когда вся страница и все ее ресурсы (изображения, стили, скрипты) полностью загружены.
//
// const image = document.getElementById('myImage');
// image.addEventListener('load', () => {
//     console.log('Image loaded!');
// });
//
// // 4. Отправка формы (submit):
// // Событие submit возникает при отправке формы.
//
//
// const form = document.getElementById('myForm');
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Предотвращаем отправку формы
//     console.log('Form submitted');
// });
// // 5. Изменение значения (change):
// // Событие change возникает, когда значение элемента формы (input, select) изменяется и теряет фокус.
//
// const select = document.getElementById('mySelect');
// select.addEventListener('change', () => {
//     console.log('Selected fruit:', select.value);
// });
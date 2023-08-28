// Перевернуть строку:
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее в перевернутом виде.

function revert(str) {
    const strArr = str.split('')
    const reverse = strArr.reverse();
    return result = reverse.join('')
}

const res = revert('Hello world')
console.log(res);

//Напишите функцию, которая генерирует случайный пароль заданной длины (например, 8 символов)
// из букв верхнего и нижнего регистра, цифр и специальных символов.

function generatePass(len) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

generatePass(8)

// Перевернуть строку:
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее в перевернутом виде.

// 'class' -> 'ssalc'

function revertWord(word) {
    console.log(word);
    const splitWord = word.split('.');
    console.log(splitWord);
    const revertArrWord = splitWord.reverse();
    console.log(revertArrWord);
    console.log(revertArrWord.join(''));
    return revertArrWord.join('');
}

const animalRevert = revertWord('кролик.цель');
console.log(animalRevert);


//Напишите функцию, которая генерирует случайный пароль заданной длины (например, 8 символов)
// из букв верхнего и нижнего регистра, цифр и специальных символов.

function generatePass(len) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

generatePass(8)

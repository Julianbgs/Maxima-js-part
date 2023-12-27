// let str = 'fifteen'; //string
// const num = 15; //number
// let bool; //boolean (true, false)
// console.log(typeof str, typeof num, typeof bool);
// str = 5;
// bool = false;
// console.log(typeof str);
// Другие типы : object, null, undefined, bigint, symbol, NaN

// типы и из приведение, конкатенация, вычитание
let firstLetter = 'Hello';
let secondLetter = 'World!';
const year = 2023;
const birthday = '2023'
// console.log(`${firstLetter} ${secondLetter}`);
// console.log(firstLetter  ,secondLetter);

// операторы: +,-,/,*,^
// логические операторы &&, || (condition1 && condition2)
// тернарный опертор (condition ? 6 : 10)
// условные опреторы if, else, else if

const num1 = 4;
let num2 = 10;

// console.log(Math.sqrt(120));

// приведение типов
// console.log('null' ? 10 : 4);

if ('null') {
    console.log(10);
} else {
    console.log(4);
}

//условные операторы + опреторы сравнения (строгое -> ===, не строгое -> ==)

const num3 = 3;
let num4 = 0;
if (num4 === 3) {
    console.log('hi');
} else if (num4 === 0) {
    console.log('yes');
} else {
    console.log('not');
}

if (num1 <= 3) {
    console.log('separ');
}

// Контекст в JavaScript - это концепция, которая определяет, как переменные и функции обращаются друг к другу
// во время выполнения кода. Каждая функция в JavaScript имеет свой контекст выполнения,
// который включает в себя переменные, ссылки на объекты и информацию о текущем выполнении.

//
//Пример 1: Глобальный контекст
// var globalVar = "Global Variable";
//
// function exampleFunction() {
//     console.log(globalVar);
// }
//
// exampleFunction(); // Вывод: "Global Variable"
// // Здесь у нас есть глобальная переменная globalVar, которая доступна внутри функции exampleFunction,
// // потому что функция может обращаться к глобальному контексту.
//
// // Пример 2: Контекст функции
// function outerFunction() {
//     var outerVar = "Outer Variable";
//
//     function innerFunction() {
//         var innerVar = "Inner Variable";
//         console.log(outerVar);
//     }
//
//     return innerFunction;
// }
// //
// var myFunction = outerFunction();
// myFunction(); // Вывод: "Outer Variable"
// // В этом примере у нас есть внешняя функция outerFunction, которая возвращает внутреннюю функцию innerFunction.
// // При вызове myFunction() внутри innerFunction есть доступ к переменной outerVar из контекста outerFunction.
//
// // Пример 3: Контекст объекта (this)
// var person = {
//     name: "Alex",
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// };
//
// person.greet(); // Вывод: "Hello, John"
// // В этом примере у нас есть объект person с методом greet. Ключевое слово this внутри метода ссылается на объект,
// // для которого вызывается метод. В данном случае this.name ссылается на свойство name объекта person.
//
// Пример 4: Контекст и стрелочные функции
const target = {
    value: 1012
}

const obj = {
    value: 20,
    getValue: function (arg, tre) {
        return  `${this.value} -  ${arg} - ${tre}` ;
    }
};


const val = obj.getValue.bind(target, 'wer', 6)
console.log(val());
// // Стрелочные функции сохраняют контекст своего окружения (места, где они были созданы).
// // В данном примере контекстом для стрелочной функции является глобальный контекст,
// // поэтому она выводит значение value из глобального контекста.
//
// // Пример 5: Контекст и методы объектов
// var calculator = {
//     value: 0,
//     add: function(num) {
//         this.value += num;
//     },
//     subtract: function(num) {
//         this.value -= num;
//     }
// };
//
// calculator.add(5);
// calculator.subtract(3);
// console.log(calculator.value); // Вывод: 2
// // Методы объекта могут взаимодействовать с данными объекта через ключевое слово this.
// // В этом примере методы add и subtract изменяют свойство value объекта calculator.
//
// // Пример 6: Контекст и колбэки
// var button = document.querySelector("button");
//
// button.addEventListener("click", function() {
//     console.log("Button clicked");
//     console.log(this); // Вывод: элемент <button>
// });
// // В колбэке для события click элемента button, this ссылается на сам элемент, на который было добавлено событие.

// Контекст в JavaScript - это важное понятие для понимания того,
// как работает код и какие переменные доступны в разных частях программы.
// Он может варьироваться в зависимости от того, где и как создана функция, и как она вызывается.
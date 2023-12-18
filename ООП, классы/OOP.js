// // //
// //Инкапсуляция
// function Person(name, age) {
//     // Приватные переменные
//     let _name = name;
//     let _age = age;
//
//     // Публичные методы для доступа к приватным данным
//     this.getName = function() {
//         return _name;
//     };
//
//     this.getAge = function() {
//         return _age;
//     };
//
//     this.sayHello = function() {
//         console.log(`Hello, my name is ${_name} and I'm ${_age} years old.`);
//     };
// }
//
// const person = new Person('Alice', 30);
// console.log(person.getName()); // Вывод: "Alice"
// console.log(person.getAge()); // Вывод: 30
// person.sayHello(); // Вывод: "Hello, my name is Alice and I'm 30 years old."
// // // Наследование
// function Employee(name, age, role) {
//     Person.call(this, name, age); // Вызываем конструктор Person
//
//     this.role = role;
// }
//
// // Наследование прототипа
// Employee.prototype = Object.create(Person.prototype);
//
// Employee.prototype.getRole = function() {
//     return this.role;
// };
//
// const employee = new Employee('Bob', 25, 'Developer');
// console.log(employee.getName()); // Вывод: "Bob"
// console.log(employee.getAge()); // Вывод: 25
// console.log(employee.getRole()); // Вывод: "Developer"
// console.log(employee.sayHello()); // Вывод: "Developer"

//Полиморфизм
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function() {
    console.log(' makes a sound');
};

function Dog(name) {
    Animal.call(this, name);
}

// Наследование прототипа
Dog.prototype = Object.create(Animal.prototype);

// Переопределение метода makeSound
Dog.prototype.makeSound = function() {
    console.log(' barks');
};

const animal = new Animal('Animal');
const dog = new Dog('Buddy');

animal.makeSound(); // Вывод: "Animal makes a sound"
dog.makeSound(); // Вывод: "Dog barks"

class Person {
    constructor(name, age) {
        this._name = name; // Приватное свойство
        this._age = age;   // Приватное свойство
    }

    // Геттеры для доступа к приватным данным
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this._name} and I'm ${this._age} years old.`);
    }
}


class Employee extends Person {
    constructor(name, age, role) {
        super(name, age); // Вызываем конструктор суперкласса

        this._role = role; // Приватное свойство
    }

    // Геттер для доступа к приватному свойству
    get role() {
        return this._role;
    }

    getRole() {
        return this._role;
    }
}

class Animal {
    constructor(name) {
        this._name = name; // Приватное свойство
    }

    // Геттер для доступа к приватному свойству
    get name() {
        return this._name;
    }

    makeSound() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Dog barks');
    }
}

const person = new Person('Alice', 30);
console.log(person.name); // Вывод: "Alice"
console.log(person.age);  // Вывод: 30
person.sayHello();        // Вывод: "Hello, my name is Alice and I'm 30 years old."

const employee = new Employee('Bob', 25, 'Developer');
console.log(employee.name);   // Вывод: "Bob"
console.log(employee.age);    // Вывод: 25
console.log(employee.getRole());   // Вывод: "Developer"
employee.sayHello();
//
const animal = new Animal('Unknown');
const dog = new Dog('Buddy');

console.log(animal.name);   // Вывод: "Unknown"
animal.makeSound();         // Вывод: "Animal makes a sound"

console.log(dog.name);      // Вывод: "Buddy"
dog.makeSound();            // Вывод: "Dog barks"

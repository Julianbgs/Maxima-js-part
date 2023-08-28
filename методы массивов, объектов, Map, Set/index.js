//ARRAY
// const arr = [1,2,3,4,5];
// const fruits = ['banana', 'kiwi']
// // arr.push(8)
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.unshift(100);
// // console.log(arr);
// // arr.shift();
// // console.log(arr);
// //
// // const each = arr.forEach((item, index) => {
// //      console.log(item);
// //      return item
// // })
// //
// // const map = arr.map((item, index) => {
// //     console.log(item);
// //     return item
// // })
// //
// const allElems = arr.concat(fruits);
// // console.log(allElems);
//
// // const join = allElems.join(' ')
// // console.log(join);
//
// const filter = allElems.filter((item) => item === 'banana')[0]
// console.log(filter, allElems);


// OBJECTS
//Object.keys(): Возвращает массив строк, представляющих ключи объекта.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
//
// let keys = Object.keys(person);
// keys = keys.filter((key) => key === 'age')
// console.log(keys); // ["firstName", "lastName", "age"]
//
// //Object.values(): Возвращает массив значений свойств объекта.
// const values = Object.values(person);
// console.log(values); // ["John", "Doe", 30]
//
//Object.entries(): Возвращает массив массивов, представляющих пары ключ-значение объекта.
// const entries = Object.entries(person);
// console.log(entries[0][1]);
// console.log(entries); // [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]
//
// //Object.assign(): Копирует значения всех перечисляемых свойств из одного или более объектов в целевой объект.
// const target = {};
// const source = { a: 1, b: 2 };
// const targetObj = Object.assign({}, source);
// console.log(targetObj); // { a: 1, b: 2 }
//
// //hasOwnProperty(): Проверяет, содержит ли объект указанное свойство.
// console.log(person.hasOwnProperty('firstName')); // true
// console.log(person.hasOwnProperty('address')); // false
//
// // //delete: Удаляет указанное свойство из объекта.
// delete person.age;
// console.log(person); // { firstName: "John", lastName: "Doe" }
//
// //for...in loop: Позволяет перебирать все перечисляемые свойства объекта.
// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }
//
// //Object.create(): Создает новый объект с указанным прототипом.
// const personPrototype = {
//     greet() {
//         console.log(`Hello, my name is ${this.firstName}`);
//     }
// };
//
// const newPerson = Object.create(personPrototype);
// newPerson.firstName = 'Hello world!';
// newPerson.greet(); // "Hello, my name is Alice"
//
// //MAP
// //Map - это коллекция пар ключ-значение, где ключи могут быть любого типа данных.
// //Отличие от объектов: Map сохраняет порядок вставки ключей, имеет встроенные методы для работы с данными.
// //Создание и добавление значений:
const myMap = new Map();
const obj = {}

let items = [
    {
        arr: [12, 3241, 21],
        id: 123
    },
    {
        arr: [12, 3241, 21],
        id: 543
    },
    {
        arr: [12, 3212312, 21232131],
        id: 76
    },
    {
        arr: [12, 3241, 21, 'trsy'],
        id: 187
    },
];
items.forEach((item, index) => {
    myMap.set(item.id, item.arr)
    obj[index] = item.arr
})

// console.log(items[3].id);

items = items.filter(item => item.id === 187)[0];
// console.log(myMap.get(items.id));
// console.log(myMap);
// console.log(myMap.get(2));
// console.log(obj);
// console.log(obj[2]);

// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set('isStudent', false);
// //
// console.log(myMap); // Map(3) { "name" => "John", "age" => 30, "isStudent" => false }
// //
// // //Получение значений:
// console.log(myMap.get('name')); // "John"
// console.log(myMap.get('age'));  // 30
// console.log(myMap.get('gender')); // undefined
//
// // //Проверка наличия ключей:
// console.log(myMap.has('name'));   // true
// console.log(myMap.has('address')); // false
//
// //Удаление значений по ключу:
// myMap.delete('isStudent');
// console.log(myMap.has('isStudent')); // false
//
// //Получение размера Map:
// console.log(myMap.size); // 2
//
// //Итерация через ключи, значения и записи:
for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

for (const entry of myMap.entries()) {
    console.log(entry[0], entry[1]);
}

// // //Создание Map из массива массивов (или другой итерируемой коллекции):
// const array = [['a', 1], ['b', 2], ['c', 3]];
// const mapFromArray = new Map(array);
// //
// console.log(mapFromArray);
// //
// //Очистка Map:
// myMap.clear();
// console.log(myMap.size); // 0
// //
//
// //SET
// //Set - это коллекция уникальных значений, где каждое значение может появляться только один раз.
// //Не допускает дублирования элементов.
// // //Создание и добавление значений:
// const mySet = new Set();
//
// mySet.add('apple');
// mySet.add('banana');
// mySet.add('orange');
// mySet.add('orange');
//
// console.log(mySet); // Set { "apple", "banana", "orange" }
// //
// // //Проверка наличия значения:
// console.log(mySet.has('apple'));   // true
// console.log(mySet.has('grape'));   // false
// //
// // //Удаление значения:
// mySet.delete('banana');
// console.log(mySet.has('banana'));  // false
// //
// // //Получение размера Set:
// console.log(mySet.size); // 2
// //
// // //Итерация через значения Set:
// for (const value of mySet) {
//     console.log(value);
// }
// //
// // //Создание Set из массива :
// const array1 = ['apple', 'banana', 'orange'];
// const setFromArray = new Set(array1);
// //
// // console.log(setFromArray);
//
// //Очистка Set:
// // mySet.clear();
// // console.log(mySet.size); // 0


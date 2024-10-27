// Промисы (Promises)
// Промисы - это механизм в JavaScript, который позволяет управлять асинхронными операциями и облегчает работу
// с асинхронным кодом. Промисы представляют собой объекты, которые могут находиться в трёх состояниях:
// ожидание (pending), выполнено (fulfilled) и отклонено (rejected).
//
//     Промисы создаются с помощью конструктора Promise. Конструктор принимает функцию, которая содержит
//     асинхронную операцию, и возвращает объект промиса.
// const myPromise = new Promise((resolve, reject) => {
//     // Асинхронная операция
//     if (/* операция успешно завершается */) {
//         resolve("Успех!");
//     } else {
//         reject("Ошибка!");
//     }
// });
const testPromise = new Promise((resolve, reject) => {
    // setTimeout(() => {
        resolve('OK')
        // reject(`${new Date().toLocaleString()} -> Ошибка сервера`)
    // }, 1000)

    // reject('Ошибка')
})

testPromise.then((result) => {
    console.log(result);
    return 'test'
}).then(res => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})

// const errServer = 500;
// testPromise.then(res => {
//     console.log(res, 'Its then');
// }).catch(err => {
//     if (errServer === 500) {
//         console.log('Кастомная ошибка сервера');
//     }
//
// })
// Рассмотрим пример асинхронной операции с использованием setTimeout, который создаст промис для имитации асинхронного запроса.
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.random();
//             if (randomNumber > 0.5) {
//                 resolve(`Данные получены: ${randomNumber}`);
//             } else {
//                 reject(`Ошибка при получении данных: ${randomNumber}`);
//             }
//         }, 1000); // Задержка в 1 секунду
//     });
// }
//
// //
// fetchData()
//     .then(result => {
//         console.log(result);
//         return  fetchData()
//     }).then(result => {
//     console.log(result);
//     })
//     .catch(error => {
//         console.error(error); // Ошибка
//     });

// Цепочки промисов (Chaining Promises)

//АБСТРАКТНЫЙ ПРИМЕР

// asyncOperation()
//     .then(result1 => {
//         return anotherAsyncOperation(result1);
//     })
//     .then(result2 => {
//         return yetAnotherAsyncOperation(result2);
//     })
//     .then(finalResult => {
//         console.log(finalResult);
//     })
//     .catch(error => {
//         console.error(error);
//     });

//
// function fetchUserData(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => response.json());
// }
//
// function fetchUserPosts(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         .then(response => response.json());
// }
//
// fetchUserData(1)
//     .then(user => {
//         console.log('User:', user);
//         return fetchUserPosts(user.id);
//     })
//     .then(posts => {
//         console.log('Posts:', posts);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

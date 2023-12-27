// setTimeout() и setInterval()
// setTimeout() и setInterval() - это функции, циклы, упр. конструкции в JavaScript для работы с асинхронными операциями времени.
//
// setTimeout(callback, delay) вызывает функцию callback через delay миллисекунд.
// setInterval(callback, interval) вызывает функцию callback каждые interval миллисекунд.

//     Пример использования setTimeout():
// setTimeout(() => {
//     console.log("Timeout executed");
// }, 1000); // Через 1 секунду выведет "Timeout executed"

const interval = setInterval(() => {
    console.log('Is set interval');
}, 1000);

setTimeout(() => {
    console.log('Is set timeout');
    clearInterval(interval)
}, 5000)

// Механизм стека вызовов
// Стек вызовов - это структура данных в памяти, которая используется для отслеживания порядка
// вызова функций в программе. Когда функция вызывается, её контекст
// (включая локальные переменные, аргументы и место в коде) сохраняется на вершине стека.
// Когда функция завершает выполнение, её контекст удаляется из стека, и выполнение возобновляется с точки,
// где была вызвана предыдущая функция.


function bar() {
    console.log('bar');
}

function foo() {
    console.log('foo');
    bar();
    console.log('foo again');
}

foo();
// При вызове foo():
//
// Вызов foo()
// Вывод "foo"
// Вызов bar()
// Вывод "bar"
// Завершение bar()
// Вывод "foo again"
// Завершение foo()

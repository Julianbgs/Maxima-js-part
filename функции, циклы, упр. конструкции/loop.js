// const ter = 3 !== 2 ? 'here' : 'not';
// console.log(ter);

// let num = 1;
//
// while (num < 10) {
//     num++;
//     console.log('is loop while value: ', num);
// }
//

// let loop_value = 0;
//
// do {
//     console.log('init');
//     loop_value++;
//     console.log(loop_value);
// } while (loop_value < 5)
//
// for(let i = 0; i < 5; i++) {
//     console.log(i)
// }

function loopIf(condition, value, title) {
    if (condition) {
        while (value < 5) {
            console.log(title, value);
            value++;
        }
    } else {
        for (value; value < 10; value++) {
            console.log(value, 'for ', title)
        }
    }
}

function upLoop(num, cb) {
    while (num <= 4) {
        cb(true, 0, 'while');
        num++;
    }

}

upLoop(1, loopIf)
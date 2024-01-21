// const ter = 3 !== 2 ? 'here' : 'not';
// console.log(ter);

// let num = 1;
// //
// while (num < 10) {
//     console.log('is loop while value: ', num);
//     num++;
// }
// //

// let loop_value = 0;
//
// do {
//     console.log('init');
//     console.log(loop_value);
//     loop_value++;
// } while (loop_value < 5)

// for(let i = 0; i < 5; i++) {
//     console.log(i)
// }

function loopIf2(condition, value, title) {
    if (condition) {
        while (value < 5) {
            console.log(title, value, 'first');
            value++;
        }
    } else {
        for (value; value < 10; value++) {
            console.log(value, 'for ', title)
        }
    }
}


function upLoop(num, cb) {
    console.log('test');
    while (num <= 4) {
        cb(0, 9, 'hi');
        num++;
    }

}

upLoop(4, loopIf2)
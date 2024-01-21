const arrNums = [1,2,3,4,5,7,2];
// for(let i = 0; i < arrNums.length; i++) {
//     console.log(arrNums[i])
// }
// forEach
const resultFirst = arrNums.forEach(function (item, index) {
    return item;
})
// map
const resultSecond = arrNums.map(function (item, index) {
    return item * 2;
})

// console.log(resultFirst);
// console.log(resultSecond, arrNums);

// function callbackWrapper(arg,callback) {
//     //
//     callback(arg);
// }
//
// callbackWrapper(120,function (num) {
//     console.log('Im callback', num)
// })

const arrObjects = [
    {
        name: 'Alis',
        age: 24,
        id: 21,
    },
    {
        name: 'Tan',
        age: 12,
        id: 24,
    },
    {
        name: 'Fu',
        age: 56,
        id: 31
    },
    {
        name: 'Fu Ton',
        age: 45,
        id: 31
    }

]

let newObjectsWithFlag = arrObjects.map(item => {
    return {
        ...item,
        flag: false // hover flag = true
    }
})

// console.log(newObjectsWithFlag);

// filter

let searchElem = newObjectsWithFlag.filter(function (item) {
    return item.id === 31
})

// searchElem = searchElem.map(human => {
//     return  {flag: true, name: `${human.name} Rex yr`}
// })

// let newArray = newObjectsWithFlag.concat(searchElem)


searchElem.forEach(item => {
    item.flag = true;
})

console.log(newObjectsWithFlag);

// console.log(res);

// ROTATE ARRAY
// function rotateArray(arr, k) {
//     if (arr.length <= 1 || k === 0) {
//         return arr;
//     }
//
//     k = k % arr.length; // Если k больше длины массива, вычисляем остаток
//
//     const rotatedPart = arr.splice(-k); // Вырезаем последние k элементов
//     Array.prototype.unshift.apply(arr, rotatedPart); // Вставляем вырезанные элементы в начало массива
//
//     return arr;
// }
//
// const originalArray = [1, 2, 3, 4, 5];
// const k = 6;
// const rotatedArray = rotateArray(originalArray, k);
// console.log(rotatedArray); // Вывод: [4, 5, 1, 2, 3]

// const testArr = [1,2,3,7]
// const reduce =  testArr.reduce((acc, val) => {
//     return acc + val
// })
//
// console.log(reduce);
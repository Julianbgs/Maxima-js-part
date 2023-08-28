import structuredClone from "@ungap/structured-clone"

const originalObj = {
    a: new Set([1,2,3]),
    b: {
        c: 'String',
        d: 2
    }
}

let copiedObj = {};

// НЕ ТО ЧТО НУЖНО ДЛЯ ГЛУБОКОГО КОПИРОВАНИЯ
// 1. For in
// for( let key in originalObj) {
//     console.log(key);
//     copiedObj[key] = originalObj[key]
// }
// copiedObj.a = 34;
// console.log(originalObj, copiedObj);

// 2. Object.assign()
//  copiedObj = Object.assign(copiedObj, originalObj)
// copiedObj.b.d = 123;
// copiedObj.a = 123;
//  // originalObj.a = 65;
// console.log(originalObj);
// console.log(copiedObj);

//3. Spread
//
// copiedObj = {...originalObj}
// console.log(copiedObj);

//4. Json
// copiedObj = JSON.parse(JSON.stringify(originalObj))
// console.log(copiedObj);
// copiedObj.b.d = 413;
// console.log(copiedObj);
// console.log(originalObj);


// ТО ЧТО НУЖНО
//1. Lodash _.cloneDeep
//2. structuredClone
copiedObj = structuredClone(originalObj)
copiedObj.b.d = 1230;
console.log(copiedObj);
console.log(originalObj);

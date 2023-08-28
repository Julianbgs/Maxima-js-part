function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Не объект, или null, возвращаем как есть
    }

    if (Array.isArray(obj)) {
        const newArr = [];
        for (let i = 0; i < obj.length; i++) {
            newArr[i] = deepCopy(obj[i]); // Рекурсивно копируем элементы массива
        }
        return newArr;
    }

    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]); // Рекурсивно копируем свойства объекта
        }
    }
    return newObj;
}

const originalObject = {
    a: 1,
    b: {
        c: 2,
        d: [1,2,3]
    }
};

const copiedObject = deepCopy(originalObject);
console.log(copiedObject, 'copy');
copiedObject.b.c = 100;
console.log(originalObject , 'orig');
console.log(originalObject.b.d === copiedObject.b.d);
console.log(copiedObject, 'copy');

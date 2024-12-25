//Завершите решение так, чтобы функция разрывала верблюжий регистр, используя пробел между словами.

function solution(string) {
    const stringArray = string.split('');
    let indexForGap = [];
    stringArray.forEach((letter, index) => {
        if(letter === letter.toUpperCase()) {
            indexForGap.push(index)
        }
    })
    let words = []
    let previous;
    if (indexForGap.length === 0) {
        return  string
    }
    indexForGap.forEach(i => {
            words.push(stringArray.slice(previous, i))
        if (i === indexForGap[indexForGap.length - 1]) {
            words.push(stringArray.slice(i, stringArray.length))
        }
        previous = i;
    })

    const result = words.map((item, index) =>
        index !== words.length - 1 ? item = item.join('') + ' ' : item = item.join(''))
    return result === " " ? " " : result.join('');
}

solution('camelCasingTestErt')
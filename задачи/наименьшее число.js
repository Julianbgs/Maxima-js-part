// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
//
//     Например:
//
// Учитывая, что [34, 15, 88, 2]ваше решение вернется2
// Учитывая, что [34, -345, -1, 100]ваше решение вернется-345

function findSmallestInt(arr) {
    //your code here

    function calcSmallestInt(arr) {
        let smaller = 0;
        let previous = null
        arr.forEach((current, index) => {
            if (index > 0) {
                console.log(`Текущий: ${current}, Предыдущий: ${previous}`);
                if (current < previous) {
                    smaller = current
                }
            }
            previous = current;

        })
        return smaller;
    }
    const result = calcSmallestInt(arr)
    return result;
}

console.log(findSmallestInt([78,56,232,412,228]))
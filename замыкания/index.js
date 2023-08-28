
function depp1() {
    let count = 0;
    // scope: GlobalFunc
    return function deep2() {
        console.log(count);
        count++;
    }
}

// console.log(a)
const result = depp1();
result()
result()
result()
const result2 = depp1();
result2()
result2()
result2()
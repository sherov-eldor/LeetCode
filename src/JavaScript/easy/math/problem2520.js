/**
 * @param {number} num
 * @return {number}
 */

var countDigits = function (num) {
    let count = 0
    num.toString().split("").forEach(n => {
        if(num % Number(n) == 0){
            count++
        }
    })
    return count
};

// let num = 7
// let num = 121;
let num = 1248;

countDigits(num);

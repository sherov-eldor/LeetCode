/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let basedNum = n.toString(k)
    let sum = 0
    for(let num of basedNum.split("")){
        sum += +num
    }
    return sum
};

// let n = 34, k = 6
let n = 10, k = 10

sumBase(n, k)
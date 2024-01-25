/**
 * @param {number[]} digits
 * @return {number[]}
 */


var plusOne = function(digits) {
    return ((BigInt(digits.join('')) + 1n).toString().split(-1,1))[0].split("").map(x => x * 1)
};

// let digits = [1,2,3]
// let digits = [9]
let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

plusOne(digits)
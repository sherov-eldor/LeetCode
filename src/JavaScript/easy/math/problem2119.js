/**
 * @param {number} num
 * @return {boolean}
 */

// First solution

var isSameAfterReversals = function(num) {
    let reversed1 = +num.toString().split("").reverse().join("")
    let reversed2 = +reversed1.toString().split("").reverse().join("")
    return reversed2 == num ? true : false
};


// Second solution

var isSameAfterReversals = function(num) {
    if(num.toString().length > 1 && +num.toString().split("")[num.toString().length - 1] == 0){
        return false
    } else {
        return true
    }
};

// let num = 526
let num = 1800

isSameAfterReversals(num)
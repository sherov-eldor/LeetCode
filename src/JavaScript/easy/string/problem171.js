/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function(columnTitle) {
    let sum = 0
    for(let j = 0; j < columnTitle.length; j++){
        sum += (columnTitle.charCodeAt(j) - 64) * Math.pow(26, columnTitle.length - j - 1)
    }
    return sum
};

// let columnTitle = "A"
// let columnTitle = "AB"
// let columnTitle = "ZY"
// let columnTitle = "FXS"
let columnTitle = "FXSHRXW"
// 2147483647

titleToNumber(columnTitle)
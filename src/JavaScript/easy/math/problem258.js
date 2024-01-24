/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num >= 10) {
        num = num.toString().split("").reduce((acc, item) => acc + +item, 0)
    }
    return num
};

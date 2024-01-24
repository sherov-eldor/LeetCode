/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let sum = numBottles
    while (numBottles >= numExchange) {
        r = numBottles % numExchange
        b = Math.floor(numBottles / numExchange)
        sum += b
        numBottles = b + r
    }
    return sum
};

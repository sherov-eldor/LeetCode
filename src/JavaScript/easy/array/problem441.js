/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count = 0
    for(let i = 1; i <= n; i++){
        n -= i
        count += 1
    }
    return count
};

let n = 5

arrangeCoins(n)
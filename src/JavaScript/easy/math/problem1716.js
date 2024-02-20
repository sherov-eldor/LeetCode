/**
 * @param {number} n
 * @return {number}
 */

var totalMoney = function(n) {
    let sum = 0
    let money = 0
    let week = 0
    for(let i = 1; i <= n; i++){
        money++
        sum += money
        if(i % 7 == 0) {
            week++
            money = week
        }
        
    }
    return sum
};

// let n = 4
// let n = 10
let n = 20

totalMoney(n)
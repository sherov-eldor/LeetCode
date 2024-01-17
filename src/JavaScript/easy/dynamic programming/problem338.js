/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
    let ans = []
    for(let i = 0; i <= n; i++){
        ans.push((i.toString(2).match(/1/g) || []).length);
    }
   return ans
};

// let n = 2
let n = 5

countBits(n)
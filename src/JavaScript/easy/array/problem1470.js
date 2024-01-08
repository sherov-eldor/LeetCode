/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */


var shuffle = function(nums, n) {
    let x = nums.slice(0, n)
    let y = nums.slice(n, nums.length)
    let arr = []
    x.forEach((a, idx) => {
        arr.push(a, y[idx])
    })
    return arr
};

let nums = [2,5,1,3,4,7], n = 3
// let nums = [1,2,3,4,4,3,2,1], n = 4
// let nums = [1,1,2,2], n = 2

shuffle(nums, n)
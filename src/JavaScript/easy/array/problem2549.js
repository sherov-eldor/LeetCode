/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumCount = function(nums) {
    let neg = 0
    let pos = 0
    for(let num of nums){
        if(num > 0){
            pos++
        } else if(num < 0){
            neg++
        }
    }
    return pos > neg ? pos : neg
};


let nums = [-2,-1,-1,1,2,3]

maximumCount(nums)
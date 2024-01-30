/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
    nums = Array.from(new Set(nums.sort((a,b) => b - a))) 
    return nums.length >= 3 ? nums[2] : nums[0]
};


// let nums = [3,2,1]
// let nums = [1,2]
let nums = [2,2,3,1]

thirdMax(nums)
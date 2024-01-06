/**
 * @param {number[]} nums
 * @return {number[]}
 */


var buildArray = function(nums) {
    let ans = []
    nums.forEach((num, idx) => {
        ans[idx] = nums[num]
    })
    return ans
};


// let nums = [0,2,1,5,3,4]
let nums = [5,0,1,2,3,4]

buildArray(nums)
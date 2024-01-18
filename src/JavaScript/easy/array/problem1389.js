/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */


var createTargetArray = function(nums, index) {
    let target = []
    nums.forEach((num, idx) => {
        target.splice(index[idx], 0, num)
    })
    return target
};

let nums = [0,1,2,3,4], index = [0,1,2,2,1]

createTargetArray(nums, index)
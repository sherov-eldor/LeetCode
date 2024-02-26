/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var targetIndices = function(nums, target) {
    let indexes = []
    nums.sort((a,b) => a - b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            indexes.push(i)
        }
    }
    return indexes
};

let nums = [1,2,5,2,3], target = 2

targetIndices(nums, target)
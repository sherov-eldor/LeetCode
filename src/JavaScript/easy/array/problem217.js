/**
 * @param {number[]} nums
 * @return {boolean}
 */


var containsDuplicate = function(nums) {
    let numsObj = {}
    for(let i = 0; i < nums.length; i++){
        if(numsObj?.[nums[i]]){
            return true
        }  else {
            numsObj[nums[i]] = 1
        }
    }
    return false
};


let nums = [1,2,3,1]
// let nums = [1,2,3,4]

containsDuplicate(nums)
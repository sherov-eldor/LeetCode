/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let nums_obj = {}
    let major = Math.floor(nums.length/2)
    let n = 0
    for(let i = 0; i < nums.length; i++){
        nums_obj?.[nums[i]] ? nums_obj[nums[i]]++ : nums_obj[nums[i]] = 1
        if(major <= nums_obj[nums[i]]){
            major = nums_obj[nums[i]]
            n = nums[i]
        }
    }
    return n
};

// let nums = [3,2,3]
let nums = [2,2,1,1,1,2,2]

majorityElement(nums)
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxFrequencyElements = function(nums) {
    let nums_obj = {}
    let max = 0
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        nums_obj?.[nums[i]] ? nums_obj[nums[i]]++ : nums_obj[nums[i]] = 1
        if(max < nums_obj[nums[i]]){
            max = nums_obj[nums[i]]
        }
    }
    for(let num in nums_obj){
        if(nums_obj[num] == max){
            sum += nums_obj[num]
        }
    }
   return sum
};

// let nums = [1,2,2,3,1,4]
let nums = [1,2,3,4,5]

maxFrequencyElements(nums)
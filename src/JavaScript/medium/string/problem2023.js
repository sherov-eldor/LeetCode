/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                count++
            }
            if(nums[j] + nums[i] == target){
                count++
            }
        }
    }
    return count
};

let nums = ["777","7","77","77"], target = "7777"
// let nums = ["123","4","12","34"], target = "1234"

numOfPairs(nums, target)
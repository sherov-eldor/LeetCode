/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while(start <= end){
        let mid = Math.floor((start + end)/2)
        let guess = nums[mid]
        if(guess === target){
            return mid
        }
        if(target > guess){
            start = mid + 1
        } else if(target < guess) {
            end = mid - 1
        }
    }
    return -1
};

let nums = [-1,0,3,5,9,12], target = 9

search(nums, target)
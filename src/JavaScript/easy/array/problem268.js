/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
    let maxNum = Math.max(...nums)
    for(let i = 0; i < maxNum; i++){
        if(!nums.includes(i)){
            return i
        }
    }
    return maxNum + 1
};


// let nums = [3,0,1]
// let nums = [0,1]
let nums = [9,6,4,2,3,5,7,0,1]

missingNumber(nums)
/**
 * @param {number[]} nums
 * @return {number}
 */

// First solution

var singleNumber = function(nums) {
    let numberObj = {}
    nums.forEach(num => {
        numberObj?.[num] ? numberObj[num]++ : numberObj[num] = 1
    })
    for(let [key, val] of Object.entries(numberObj)){
        if(val == 1){
            return key
        }
    }
};

// Second solution
// not my solution

var singleNumber = function(nums) {
    let result = nums.reduce((acc, current) => acc ^= current);
    return result
};

// let nums = [2,2,1]
let nums = [4,1,2,1,2]

singleNumber(nums)
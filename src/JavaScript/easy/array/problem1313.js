/**
 * @param {number[]} nums
 * @return {number[]}
 */


var decompressRLElist = function(nums) {
    let answer = []
    for(let i = 0; i < nums.length; i+=2){
        let arr = [nums[i], nums[i + 1]]
        for(let k = 1; k <= arr[0]; k++){
            answer.push(arr[1])
        }
    }
    return answer
};

// let nums = [1,2,3,4]
let nums = [1,1,2,3]

decompressRLElist(nums)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var sumIndicesWithKSetBits = function(nums, k) {
    let binaryArr = []
    let sum = 0
    nums.forEach((num,idx) => {
        binaryArr.push(idx.toString(2))
    })
    binaryArr.forEach((binary, idx) => {
        let a = 0
        binary.split("").forEach(bin => {
            if(bin == "1"){
                a++
            }
        })
        if(a == k){
            sum += nums[idx]
        }
    })
    return sum
};


let nums = [5,10,1,5,2], k = 1
// let nums = [4,3,2,1], k = 2

sumIndicesWithKSetBits(nums, k)
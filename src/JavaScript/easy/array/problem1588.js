/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function (arr) {
    let subArr = []
    for(let i = 1; i <= arr.length; i += 2){
        for(let j = 0; j < arr.length; j++){
            if(j + i <= arr.length){
                subArr.push(...arr.slice(j,i + j))
            }
        }
    }
    return subArr.reduce((acc, item) => acc + item)
};

// let arr = [1,4,2,5,3]
// let arr = [1,2]
let arr = [10,11,12]

sumOddLengthSubarrays(arr)
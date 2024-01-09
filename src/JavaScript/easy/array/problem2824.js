/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let pairs = 0
  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++){
        if (nums[i] + nums[j] < target){
            pairs++
        }
    }
  }
  return pairs
};

// let nums = [-1,1,2,3,1], target = 2
let nums = [-6, 2, 5, -2, -7, -1, 3],
  target = -2;

countPairs(nums, target);

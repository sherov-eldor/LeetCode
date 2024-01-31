/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  let max = 0;
  if (nums.length > 2) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if ((nums[i] - 1) * (nums[j] - 1) > max) {
          max = (nums[i] - 1) * (nums[j] - 1);
        }
      }
    }
  } else {
    return (nums[0] - 1) * (nums[1] - 1);
  }
  return max;
};

// let nums = [3, 4, 5, 2];
// let nums = [1,5,4,5]
// let nums = [3, 7];
let nums = [10,2,5,2]

maxProduct(nums);
